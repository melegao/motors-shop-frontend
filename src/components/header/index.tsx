import { useState } from "react";
import { ContainerHeader } from "./styles";
import logo from "../../assets/logo/logo-motors-shop.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/style";
import { useVehicleContext } from "../../context/ProductContext";
import { toast } from "react-toastify";

function Header() {
  const navigate = useNavigate();

  const { logged, user, setLogged } = useVehicleContext();

  const [headerMenuName, setHeaderMenuName] = useState(true);
  const [className, setClassName] = useState("header-menu");
  const [handleLoggedMenu, setHandleLoggedMenu] = useState(true);
  const [classNameLoggedMenu, setClassNameLoggedMenu] = useState(
    "logged-menu-disable"
  );

  const handleHeaderMenu = () => {
    setHeaderMenuName(!headerMenuName);

    if (headerMenuName === true) {
      setClassName("header-menu-active");
    } else {
      setClassName("header-menu");
    }
  };

  const changeLoggedMenu = () => {
    setHandleLoggedMenu(!handleLoggedMenu);

    if (handleLoggedMenu === true) {
      setClassNameLoggedMenu("logged-menu");
    } else {
      setClassNameLoggedMenu("logged-menu-disable");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.success("Usuário deslogado com sucesso!");
    setTimeout(() => {
      setLogged(false);
      navigate("/");
    }, 1000);
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
          <>
            <div className="login-area" onClick={() => changeLoggedMenu()}>
              {user?.fullName}
            </div>
            <div className={classNameLoggedMenu}>
              <ul>
                <li onClick={() => navigate("/admin")}>Editar Perfil</li>
                <li>Editar Endereço</li>
                <li>Minhas Compras</li>
                <li onClick={() => handleLogout()}>Sair</li>
              </ul>
            </div>
          </>
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
