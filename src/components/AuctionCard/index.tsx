import { Li, LiContainer } from "./styles";
import { BsArrowRight } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";

function AuctionCard({ car }: any) {
  return (
    <LiContainer>
      <div className="coverImage">
        <img src={car.coverImage} alt="Imagem do Veículo" />
      </div>
      <Li>
        <p className="time">
          <span>
            <MdOutlineWatchLater />
          </span>
          01:58:00
        </p>
        <h2>{car.name}</h2>
        <p className="description">{car.description}</p>
        <p className="owner">
          <span>{car.owner.slice(0, 1)}</span>
          {car.owner}
        </p>
        <div className="carInfo">
          <div className="carNumbers">
            <span>{car.year}</span>
            <span>{`${car.km} KM`}</span>
          </div>
          <p className="price">
            {Number(car.price).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </Li>
      <div className="button">
        <p>Acessar página do leilão</p>
        <span>
          <BsArrowRight />
        </span>
      </div>
    </LiContainer>
  );
}

export default AuctionCard;
