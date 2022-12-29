import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  IModalDelete,
  IModalSuccess,
} from "../../interfaces/successModal.interfaces";
import { ButtonBase } from "../Button";
import { Container } from "./styles";

export const SuccessModal: React.FC<IModalSuccess> = ({
  setShowSuccessModal,
  text,
  title,
  type,
}) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="modal">
        <header>
          <h2>Sucesso!</h2>
          <MdClose onClick={() => setShowSuccessModal(false)} />
        </header>
        <section>
          <h2>{title}</h2>
          <p>{text}</p>
          {type === "signIn" && (
            <ButtonBase
              type="button"
              width="50%"
              colorbutton="Brand"
              onClick={() => navigate("/login")}
            >
              Ir para o login
            </ButtonBase>
          )}
        </section>
      </div>
    </Container>
  );
};

export const DeleteModal: React.FC<IModalDelete> = ({ setShowDeleteModal }) => {
  return (
    <Container>
      <div className="modal">
        <header>
          <h2>Excluir anúncio</h2>
          <MdClose onClick={() => setShowDeleteModal(false)} />
        </header>
        <section className="modal--withButton">
          <h2>Tem certeza que deseja remover este anúncio?</h2>
          <p>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </p>
          <div className="button--box">
            <ButtonBase
              type="button"
              width="50%"
              colorbutton="Negative"
              onClick={() => setShowDeleteModal(false)}
            >
              Cancelar
            </ButtonBase>
            <ButtonBase
              type="button"
              width="50%"
              colorbutton="Alert"
              onClick={() => {
                console.log("Deletado");
              }}
            >
              Sim, excluir anúncio
            </ButtonBase>
          </div>
        </section>
      </div>
    </Container>
  );
};
