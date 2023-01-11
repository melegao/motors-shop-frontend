import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselProductsOwner from "../../components/CarouselProductOwner";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { IUser } from "../../context/ProductContext";
import api from "../../services/api";
import { userInitials } from "../../utils/userInitials";
import { ProfileContainer } from "./styles";

function ProfileViewUser() {
  const [userInfo, setUserInfo] = useState<IUser | undefined>();
  const [userName, setUserName] = useState("");

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => {
        setUserInfo(res.data);
        setUserName(res.data.fullName);
      })
      .catch((err) => console.log("Tente novamente mais tarde."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />

      <ProfileContainer>
        <div className="background-blue"></div>

        <div className="userInfo">
          <div className="photo">{userInitials(userName)}</div>
          <h2 className="nameTitle">
            {userInfo?.fullName} <span>Anunciante</span>
          </h2>
          <p className="description">{userInfo?.description}</p>
        </div>

        <div className="cars">
          <h3>Carros</h3>
          <CarouselProductsOwner props="car" arr={userInfo} id={id} />
        </div>

        <div className="motorcycles">
          <h3>Motos</h3>
          <CarouselProductsOwner props="motorcycle" arr={userInfo} id={id} />
        </div>
      </ProfileContainer>

      <Footer />
    </>
  );
}

export default ProfileViewUser;
