import { useState } from "react";
import { ContainerHeader } from "./styles";
import logo from "../../assets/logo/logo-motors-shop.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/style";

function Header() {
  const navigate = useNavigate();

  const [logged, setLogged] = useState(false); // ESSE STATE DEVERÁ SER SUBSTITUÍDO POR UM PROVIDER.

  const [headerMenuName, setHeaderMenuName] = useState(true);
  const [className, setClassName] = useState("header-menu");

  const handleHeaderMenu = () => {
    setHeaderMenuName(!headerMenuName);

    if (headerMenuName === true) {
      setClassName("header-menu-active");
    } else {
      setClassName("header-menu");
    }
  };

  return (
    <ContainerHeader>
      <div onClick={() => navigate("/")} className="header-logo">
        <img src={logo} alt="Motors Shop" />
      </div>
      <div className="mobile-menu" onClick={() => handleHeaderMenu()}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={className}>
        <ul>
          <li>Carros</li>
          <li>Motos</li>
          <li>Leilão</li>
        </ul>

        {logged ? (
          <div className="login-area">Olá Fulano</div>
        ) : (
          <div className="login-area">
            <p onClick={() => navigate("/login")}>Fazer Login</p>
            <Button colorbutton="Outline2" onClick={() => navigate("/sign")}>
              Cadastrar
            </Button>
          </div>
        )}
      </div>
    </ContainerHeader>
  );
}

export default Header;
