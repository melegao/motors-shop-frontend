import Header from "../../components/header";
import Carro1 from "../../assets/images/carro1.png";
import { ProductContainer } from "./styles";
import { Button } from "../../components/Button/style";
import { useVehicleContext } from "../../context/ProductContext";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import api from "../../services/api";
import CreateComment from "../../components/CreateComment";


function ProductDetails() {
  interface IVehicle {
    id: string;
    name: string;
    description: string;
    km: string;
    year: number;
    coverImage: string;
    price: string;
    createdAt: string;
    updatedAt: string;
    vehicleImages?: { id: string; url: string }[];
    user: {id: string; fullName: string; description: string}
  }

  const { id } = useParams();

  const navigate = useNavigate()

  const [vehicle, setVehicle] = useState<IVehicle>();

  useEffect(() => {
    api
      .get(`vehicles/${id}`)
      .then((res) => {
        setVehicle(res.data)
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClickSeller = () => {
    navigate(`/profile/${vehicle?.user.id}`)
}

  return (
    <>
      <Header />

      <ProductContainer>
        <div className="background-blue"></div>
        <div className="div-container-desktop">
          <div className="div-cover-photo">
            <img
              src={vehicle?.coverImage}
              alt="Carro"
              className="cover-photo"
            />
          </div>
          <div className="div-resume">
            <h2>{vehicle?.name}</h2>
            <div className="div-resume-desktop">
              <div className="div-resume-feat">
                <span>{vehicle?.year}</span>
                <span>{vehicle?.km}</span>
              </div>
              <p className="p-price">{Number(vehicle?.price).toLocaleString("pt-BR", {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
            </div>
            <Button colorbutton="Brand">Comprar</Button>
          </div>
          <div className="div-description">
            <h2>Descrição</h2>
            <p>{vehicle?.description}</p>
          </div>
          <CreateComment />
          <div className="div-photos">
            <h2>Fotos</h2>
            <div className="div-vehicles-photos">
                {vehicle?.vehicleImages?.map((elem) => <img key={elem.id} src={elem.url} alt={vehicle.name} width="100rem"/>)}
            </div>
          </div>
          <div className="div-seller">
            <div className="seller-photo">
              <p>SL</p>
            </div>
            <h2>{vehicle?.user.fullName}</h2>
            <p>{vehicle?.user.description}</p>
            <Button colorbutton="Grey" sizebutton="default" onClick={() => handleClickSeller()}>
              Ver todos anúncios
            </Button>
          </div>
        </div>

        <div className="div-aside-desktop">
          <div className="div-photos-desktop">
            <h2>Fotos</h2>
            <div className="div-vehicles-photos">
                {vehicle?.vehicleImages?.map((elem) => <img key={elem.id} src={elem.url} alt={vehicle.name} width="100rem"/>)}
            </div>
          </div>
          <div className="div-seller-desktop">
            <div className="seller-photo">
              <p>SL</p>
            </div>
            <h2>{vehicle?.user.fullName}</h2>
            <p>{vehicle?.user.description}</p>
            <Button colorbutton="Grey" sizebutton="default" onClick={() => handleClickSeller()}>
              Ver todos anúncios
            </Button>
          </div>
        </div>
      </ProductContainer>
      <Footer />
    </>
  );
}

export default ProductDetails;
