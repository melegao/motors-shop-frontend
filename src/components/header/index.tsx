import { useState } from "react";
import { ContainerHeader } from "./styles";
import logo from "../../assets/logo/logo-motors-shop.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/style";

function Header() {
  // const navigate = useNavigate(); SERÁ UTILIZADO PARA NAVEGAÇÃO

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
      <div>
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
          <div className="teste">Olá Fulano</div>
        ) : (
          <div className="teste">
            <p>Fazer Login</p>
            <Button colorbutton="Outline2">Cadastrar</Button>
          </div>
        )}
      </div>
    </ContainerHeader>
  );
}

export default Header;
