import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import { ButtonBase } from "../Button";
import { Container, NotLogin } from "./styles";

import { IUserFullData } from "../../interfaces/user.interface";
import { CheckCommentContext } from "../../context/CheckComment";

const CreateComment = () => {
  const [comments, setComments] = useState("");
  const [isEnable, setIsEnable] = useState(false);
  const [user, setUser] = useState<IUserFullData>({} as IUserFullData);

  const { isComment, setIsComment } = useContext(CheckCommentContext);

  const { register, handleSubmit } = useForm({
    reValidateMode: "onSubmit",
  });
  const { id } = useParams();
  const userToken = localStorage.getItem("@motorsShop:token");
  const userId = localStorage.getItem("@motorsShop:userId");

  useEffect(() => {
    if (userId !== null) {
      api
        .get(`users/${userId}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (data: object) => {
    const fixedData = {
      ...data,
      vehicleId: id,
    };
    api
      .post("comments", fixedData, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        toast.success("Comentário criado com sucesso!");
        setIsComment(!isComment);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo deu errado");
      });
  };

  function handleChange(e: any) {
    setComments(e.target.value);
    if (e.currentTarget.value.length > 0) {
      setIsEnable(true);
    } else {
      setIsEnable(false);
    }
  }

  const userInitials = (name: string) => {
    const nameArr = name.split(" ");

    const initials = `${nameArr[0][0]}${nameArr[nameArr.length - 1][0]}`;

    return initials;
  };

  return (
    <>
      {userId !== null ? (
        <Container onSubmit={handleSubmit(onSubmit)}>
          {user.fullName !== undefined && (
            <header>
              <div className="seller-photo">
                <p>{userInitials(user.fullName)}</p>
              </div>
              <h2>{user.fullName}</h2>
            </header>
          )}
          <div className="text--comments">
            <textarea
              value={comments}
              cols={30}
              rows={10}
              {...register("text")}
              onChange={handleChange}
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              onClick={(e) => {
                if (e.currentTarget.value.length > 0) {
                  setIsEnable(true);
                } else {
                  setIsEnable(false);
                }
              }}
            ></textarea>
            {isEnable ? (
              <ButtonBase type="submit" colorbutton="Brand">
                Comentar
              </ButtonBase>
            ) : (
              <ButtonBase type="submit" disabled colorbutton="Disable">
                Comentar
              </ButtonBase>
            )}
          </div>
          <div className="ready--comments">
            <p
              onClick={() => {
                setComments("Gostei muito!");
                setIsEnable(false);
              }}
            >
              Gostei muito!
            </p>
            <p
              onClick={() => {
                setComments("Incrível");
                setIsEnable(false);
              }}
            >
              Incrível
            </p>
            <p
              onClick={() => {
                setComments("Recomendarei para meus amigos!");
                setIsEnable(false);
              }}
            >
              Recomendarei para meus amigos!
            </p>
          </div>
        </Container>
      ) : (
        <NotLogin>
          <p>Precisa estar logado para Comentar</p>
        </NotLogin>
      )}
    </>
  );
};

export default CreateComment;
