import { useState } from "react";
import CarouselProducts from "../../components/CarouselProducts";
import CreateProductModal from "../../components/CreateProductModal";
import Header from "../../components/header";
import { BlueDiv, Container, Content, UserDiv } from "./styles";

function Admin() {
  const [showCreateVehicleModal, setShowCreateVehicleModal] = useState(false);

  return (
    <Container>
      {showCreateVehicleModal && (
        <CreateProductModal
          setShowCreateVehicleModal={setShowCreateVehicleModal}
        />
      )}
      <Header />
      <Content>
        <UserDiv>
          <BlueDiv />
          <div className="userInfo">
            <div className="photo">SL</div>
            <h2 className="nameTitle">
              Samuel Leão <span>Anunciante</span>
            </h2>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos aliquid, ut molestias quaerat nisi recusandae at sint
              corporis.
            </p>
            <button
              className="addVehicle"
              onClick={() => setShowCreateVehicleModal(true)}
            >
              Criar anúncio
            </button>
          </div>
        </UserDiv>

        <div className="cars">
          <h3>Carros</h3>
          <CarouselProducts props="cars" />
        </div>

        <div className="motorcycles">
          <h3>Motos</h3>
          <CarouselProducts props="motorcycles" />
        </div>
      </Content>
    </Container>
  );
}

export default Admin;
