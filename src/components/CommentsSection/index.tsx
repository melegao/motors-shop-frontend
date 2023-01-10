import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IVehicleComment } from "../../interfaces/vehicle.interfaces";
import api from "../../services/api";
import CommentCard from "../CommentCard";
import { Container } from "./styles";

interface CommentProps {
  id: string;
}

function CommentSection({ id }: CommentProps) {
  const [vehicleComments, setVehicleComments] = useState<IVehicleComment[]>([]);

  useEffect(() => {
    api
      .get("/comments")
      .then((res) => {
        setVehicleComments(
          res.data.filter((elem: any) => elem.vehicle.id === id)
        );
      })
      .catch((err) => {
        toast.error("Comentários não foram carregados");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h2>Comentários</h2>

      {vehicleComments.length !== 0 ? (
        vehicleComments.map((elem) => (
          <CommentCard
            key={elem.id}
            userName={elem.user.fullName}
            commentDate={elem.createdAt}
            text={elem.text}
          />
        ))
      ) : (
        <div>Este veículo ainda não possui comentários.</div>
      )}
    </Container>
  );
}

export default CommentSection;
