import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CarouselProductsOwner from "../../components/CarouselProductOwner";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { IUser } from "../../context/ProductContext";
import api from "../../services/api";
import { ProfileContainer } from "./styles";

function ProfileViewUser() {
  
  const [userInfo, setUserInfo] = useState<IUser | undefined>()

  const { id } = useParams();

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err))
  },[])

  return (
    <>
      <Header />

      <ProfileContainer>
        <div className="background-blue"></div>

        <div className="userInfo">
          <div className="photo">SL</div>
          <h2 className="nameTitle">
            {userInfo?.fullName} <span>Anunciante</span>
          </h2>
          <p className="description">{userInfo?.description}</p>
        </div>

        <div className="cars">
          <h3>Carros</h3>
          <CarouselProductsOwner props="car" arr={userInfo} id={id}/>
        </div>

        <div className="motorcycles">
          <h3>Motos</h3>
          <CarouselProductsOwner props="motorcycle" arr={userInfo} id={id}/>
        </div>
      </ProfileContainer>

      <Footer />
    </>
  );
}

export default ProfileViewUser;
