import { useEffect, useState } from "react";
import CarouselProductsOwner from "../../components/CarouselProductOwner";
import CarouselProducts from "../../components/CarouselProducts";
import CreateProductModal from "../../components/CreateProductModal";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { IUser, useVehicleContext } from "../../context/ProductContext";
import { BlueDiv, Container, Content, UserDiv } from "./styles";

function Admin() {
  const [showCreateVehicleModal, setShowCreateVehicleModal] = useState(false);

  const { user } = useVehicleContext();
  
  const id = localStorage.getItem("@motorsShop:userId")

  return (
    <>
      <Header />
      <Container>
        {showCreateVehicleModal && (
          <CreateProductModal
            setShowCreateVehicleModal={setShowCreateVehicleModal}
          />
        )}
        <Content>
          <UserDiv>
            <BlueDiv />
            <div className="userInfo">
              <div className="photo">SL</div>
              <h2 className="nameTitle">
                {user?.fullName} <span>Anunciante</span>
              </h2>
              <p className="description">{user?.description}</p>
              <button
                className="addVehicle"
                onClick={() => setShowCreateVehicleModal(true)}
              >
                Criar anúncio
              </button>
            </div>
          </UserDiv>

          <div className="auction">
            <h3>Leilão</h3>
            <div>CARROSSEL</div>
          </div>

          <div className="cars">
            <h3>Carros</h3>
            <CarouselProductsOwner props="car" id={id}/>
          </div>

          <div className="motorcycles">
            <h3>Motos</h3>
            <CarouselProductsOwner props="motorcycle" id={id}/>
          </div>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default Admin;
