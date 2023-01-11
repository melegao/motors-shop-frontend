import { useState } from "react";
import CarouselAdmin from "../../components/CarouselAdmin";
import CreateProductModal from "../../components/CreateProductModal";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { useVehicleContext } from "../../context/ProductContext";
import { BlueDiv, Container, Content, UserDiv } from "./styles";

function Admin() {
  const [showCreateVehicleModal, setShowCreateVehicleModal] = useState(false);

  const { user } = useVehicleContext();

  const id = localStorage.getItem("@motorsShop:userId");

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
            <div>Você não possui veículo para Leilão.</div>
          </div>

          <div className="cars">
            <h3>Carros</h3>
            <CarouselAdmin props="car" id={id} />
          </div>

          <div className="motorcycles">
            <h3>Motos</h3>
            <CarouselAdmin props="motorcycle" id={id} />
          </div>
        </Content>
      </Container>
      <Footer />
    </>
  );
}

export default Admin;
