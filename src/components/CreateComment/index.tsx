import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonBase } from "../Button";
import { Container } from "./styles";

const CreateComment = () => {
  const [comments, setComments] = useState("");
  const [isEnable, setIsEnable] = useState(false);

  const { register, handleSubmit } = useForm({
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data: object) => {
    console.log(data);
  };

  function handleChange(e: any) {
    setComments(e.target.value);
    if (e.currentTarget.value.length > 0) {
      setIsEnable(true);
    } else {
      setIsEnable(false);
    }
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <header>
        <div className="seller-photo">
          <p>SL</p>
        </div>
        <h2>Samuel Leão</h2>
      </header>
      <div className="text--comments">
        <textarea
          value={comments}
          cols={30}
          rows={10}
          {...register("comments")}
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
  );
};

export default CreateComment;
