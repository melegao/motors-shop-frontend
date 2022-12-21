import { MdClose } from "react-icons/md";
import SaleForm from "../SaleForm";
import { Container } from "./styles";

function CreateProductModal({ setShowCreateVehicleModal }: any) {
  return (
    <Container>
      <div className="modal">
        <header>
          <h2>Criar anúncio</h2>
          <MdClose onClick={() => setShowCreateVehicleModal(false)} />
        </header>

        <div className="saleType">
          <p>Tipo de anúncio</p>
          <div className="saleButtons">
            <button>Venda</button>
            <button>Leilão</button>
          </div>
        </div>

        <p>Informações do veículo</p>
        <SaleForm setShowCreateVehicleModal={setShowCreateVehicleModal} />
      </div>
    </Container>
  );
}

export default CreateProductModal;
