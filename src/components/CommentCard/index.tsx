import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CheckCommentContext } from "../../context/CheckComment";
import api from "../../services/api";
import { Button } from "../Button/style";
import EditCommentModal from "../EditCommentModal";
import { SuccessModal } from "../Modal";
import { CommentDiv } from "./styles";

interface CommentProps {
  userName: string;
  commentDate: string;
  text: string;
  commentId: string;
}

function CommentCard({ userName, commentDate, text, commentId }: CommentProps) {
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [comment, setComment] = useState({} as any);

  const { isComment, setIsComment } = useContext(CheckCommentContext);

  const userId = localStorage.getItem("@motorsShop:userId");
  const token = localStorage.getItem("@motorsShop:token");

  useEffect(() => {
    if (userId !== null) {
      api
        .get(`comments/${commentId}`)
        .then((res) => {
          setComment(res.data);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteComment = (commentId: string) => {
    api
      .delete(`comments/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Comentario deletado com Sucesso");
        setIsComment(!isComment);
      })
      .catch((err) => toast.error("Comentario NÃO foi deletado"));
  };

  const userInitials = (name: string) => {
    const nameArr = userName.split(" ");

    const initials = `${nameArr[0][0]}${nameArr[nameArr.length - 1][0]}`;

    return initials;
  };

  const calculateTimePassed = (dateString: string) => {
    let date = Date.parse(dateString);

    const currentDate = new Date();

    let currentDateTime = currentDate.getTime();

    let timePassed = currentDateTime - date;

    let msToSeconds = Math.floor(timePassed / 1000);

    let msToMinutes = Math.floor(timePassed / 60000);

    let msToHour = Math.floor(timePassed / 3600000);

    let msToDay = Math.floor(timePassed / 86400000);

    let msToMonth = Math.floor(timePassed / 2629800000);

    let msToYear = Math.floor(timePassed / 31536000000);

    if (timePassed > 31536000000) {
      if (msToYear === 1) {
        return `há ${msToYear} ano`;
      } else {
        return `há ${msToYear} anos`;
      }
    } else if (timePassed > 2629800000) {
      if (msToMonth === 1) {
        return `há ${msToMonth} mês`;
      } else {
        return `há ${msToMonth} meses`;
      }
    } else if (timePassed > 86400000) {
      if (msToDay === 1) {
        return `há ${msToDay} dia`;
      } else {
        return `há ${msToDay} dias`;
      }
    } else if (timePassed > 3600000) {
      if (msToHour === 1) {
        return `há ${msToHour} hora`;
      } else {
        return `há ${msToHour} horas`;
      }
    } else if (timePassed > 60000) {
      if (msToMinutes === 1) {
        return `há ${msToMinutes} minuto`;
      } else {
        return `há ${msToMinutes} minutos`;
      }
    } else {
      if (msToSeconds === 1) {
        return `há ${msToSeconds} segundo`;
      } else {
        return `há ${msToSeconds} segundos`;
      }
    }
  };

  return (
    <CommentDiv>
      {showModal && (
        <EditCommentModal
          setShowModal={setShowModal}
          setShowSuccessModal={setShowSuccessModal}
          commentId={commentId}
        />
      )}
      {showSuccessModal && (
        <SuccessModal
          header="Sucesso!"
          setShowSuccessModal={setShowSuccessModal}
          title="Seu comentário foi editado com sucesso!"
          text="Agora você poderá ver seus comentários modificados"
        />
      )}
      <div className="userInfo">
        <div className="sellerPhoto">
          <p>{userInitials(userName)}</p>
        </div>
        <p className="userName">{userName}</p>
        <span className="date">{calculateTimePassed(commentDate)}</span>
      </div>
      <div className="text">{text}</div>
      {comment.user?.id === userId && (
        <>
          <Button onClick={() => setShowModal(true)}>Editar</Button>
          <Button onClick={() => deleteComment(comment.id)}>Deletar</Button>
        </>
      )}
    </CommentDiv>
  );
}

export default CommentCard;
