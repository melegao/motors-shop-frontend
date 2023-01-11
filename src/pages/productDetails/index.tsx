import Header from "../../components/header";
import { ProductContainer } from "./styles";
import { Button } from "../../components/Button/style";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import api from "../../services/api";
import CreateComment from "../../components/CreateComment";
import CommentSection from "../../components/CommentsSection";
import { userInitials } from "../../utils/userInitials";

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
    user: {
      id: string;
      fullName: string;
      description: string;
      cellPhone: string;
    };
  }

  const { id } = useParams();

  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState<IVehicle>();
  const [ownerName, setOwnerName] = useState("");

  useEffect(() => {
    api
      .get(`vehicles/${id}`)
      .then((res) => {
        setVehicle(res.data);
        setOwnerName(res.data.user.fullName);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickSeller = () => {
    navigate(`/profile/${vehicle?.user.id}`);
  };

  const handleBuy = () => {
    const number = vehicle?.user.cellPhone.replace(" ", "").replace("-", "");
    const url = `https://api.whatsapp.com/send/?phone=55${number}&text=Ol%C3%A1%2C+vi+o+seu+an%C3%BAncio+no+Motors+shop.+Gostaria+de+fazer+uma+oferta%21&type=phone_number&app_absent=0`;
    window.open(url, "_blanc");
  };

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
              <p className="p-price">
                {Number(vehicle?.price).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <Button colorbutton="Brand" onClick={() => handleBuy()}>
              Comprar
            </Button>
          </div>
          <div className="div-description">
            <h2>Descrição</h2>
            <p>{vehicle?.description}</p>
          </div>
          <CommentSection id={id!} />
          <CreateComment />
          <div className="div-photos">
            <h2>Fotos</h2>
            <div className="div-vehicles-photos">
              {vehicle?.vehicleImages?.map((elem) => (
                <img
                  key={elem.id}
                  src={elem.url}
                  alt={vehicle.name}
                  width="100rem"
                />
              ))}
            </div>
          </div>
          <div className="div-seller">
            <div className="seller-photo">
              <p>SL</p>
            </div>
            <h2>{vehicle?.user.fullName}</h2>
            <p>{vehicle?.user.description}</p>
            <Button
              colorbutton="Grey"
              sizebutton="default"
              onClick={() => handleClickSeller()}
            >
              Ver todos anúncios
            </Button>
          </div>
        </div>

        <div className="div-aside-desktop">
          <div className="div-photos-desktop">
            <h2>Fotos</h2>
            <div className="div-vehicles-photos">
              {vehicle?.vehicleImages?.map((elem) => (
                <img
                  key={elem.id}
                  src={elem.url}
                  alt={vehicle.name}
                  width="100rem"
                />
              ))}
            </div>
          </div>
          <div className="div-seller-desktop">
            <div className="seller-photo">
              <p>{userInitials(ownerName)}</p>
            </div>
            <h2>{vehicle?.user.fullName}</h2>
            <p>{vehicle?.user.description}</p>
            <Button
              colorbutton="Grey"
              sizebutton="default"
              onClick={() => handleClickSeller()}
            >
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
