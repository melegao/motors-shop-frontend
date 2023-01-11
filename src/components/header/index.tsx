import { useState } from "react";
import { ContainerHeader } from "./styles";
import logo from "../../assets/logo/logo-motors-shop.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/style";
import { useVehicleContext } from "../../context/ProductContext";
import { toast } from "react-toastify";
import EditUserModal from "../EditUserModal";
import { SuccessModal } from "../Modal";
import EditAddressModal from "../EditAdressModal";
import { HashLink } from "react-router-hash-link";

function Header() {
  const navigate = useNavigate();

  const { logged, setLogged, user } = useVehicleContext();

  const [headerMenuName, setHeaderMenuName] = useState(true);
  const [className, setClassName] = useState("header-menu");
  const [handleLoggedMenu, setHandleLoggedMenu] = useState(true);
  const [classNameLoggedMenu, setClassNameLoggedMenu] = useState(
    "logged-menu-disable"
  );

  const [showModalProfile, setShowModalProfile] = useState(false);
  const [showModalAddress, setShowModalAddress] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

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
      {showModalProfile && (
        <EditUserModal
          setShowModal={setShowModalProfile}
          setShowSuccessModal={setShowSuccessModal}
        />
      )}
      {showModalAddress && (
        <EditAddressModal
          setShowModal={setShowModalAddress}
          setShowSuccessModal={setShowSuccessModal}
        />
      )}
      {showSuccessModal && (
        <SuccessModal
          header="Sucesso!"
          setShowSuccessModal={setShowSuccessModal}
          title="Sua conta foi editada com sucesso!"
          text="Agora você poderá ver seus negócios crescendo em grande escala"
        />
      )}

      <div onClick={() => navigate("/")} className="header-logo">
        <img src={logo} alt="Motors Shop" />
      </div>
      <div className="mobile-menu" onClick={() => handleHeaderMenu()}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className={`${className} text-decoration`}>
        <ul>
          <li>
            <HashLink smooth to="/#car-list">
              Carros
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#motorcycle-list">
              Motos
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#auction-list">
              Leilão
            </HashLink>
          </li>
        </ul>

        {logged ? (
          <>
            <div className="login-area" onClick={() => changeLoggedMenu()}>
              <span>{`${user?.fullName.split(" ")[0][0]}${
                user?.fullName.split(" ")[
                  user?.fullName.split(" ").length - 1
                ][0]
              }`}</span>
              {user?.fullName}
            </div>
            <div className={classNameLoggedMenu}>
              <ul>
                <li onClick={() => setShowModalProfile(true)}>Editar Perfil</li>
                <li onClick={() => setShowModalAddress(true)}>
                  Editar Endereço
                </li>
                <li onClick={() => navigate("/admin")}>Meus Anúncios</li>
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
