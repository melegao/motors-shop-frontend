import { FooterContainer } from "./styles";
import logo from "../../assets/logo/logo-bw.svg";
import { FiChevronUp } from "react-icons/fi";

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FooterContainer>
      <div>
        <img src={logo} alt="Motors shop logo" />
      </div>
      <p>© 2022 - Todos os direitos reservados.</p>
      <div className="div-up-button" onClick={() => handleClick()}>
        <FiChevronUp className="icon-up" size={30} />
      </div>
    </FooterContainer>
  );
}

export default Footer;
