import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IModal } from "../../interfaces/successModal.interfaces";
import { ButtonBase } from "../Button";
import { Container } from "./styles";

const SuccessModal: React.FC<IModal> = ({ setShowSuccessModal }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="success--modal">
        <header>
          <h2>Sucesso!</h2>
          <MdClose onClick={() => setShowSuccessModal(false)} />
        </header>
        <section>
          <h2>Sua conta foi criada com sucesso!</h2>
          <p>Agora você poderá ver seus negócios crescendo em grande escala</p>

          <ButtonBase
            type="button"
            width="50%"
            colorbutton="Brand"
            onClick={() => navigate("/login")}
          >
            Ir para o login
          </ButtonBase>
        </section>
      </div>
    </Container>
  );
};

export default SuccessModal;
