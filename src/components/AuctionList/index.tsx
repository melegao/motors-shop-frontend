import AuctionCard from "../AuctionCard";
import { List } from "./styles";
import Car1 from "../../assets/images/car1.svg";
import Car2 from "../../assets/images/car2.svg";

export interface IAuctionVehicle {
  name: string;
  description: string;
  km: string;
  year: number;
  coverImage: string;
  price: string;
  owner: string;
  carPhotos?: string;
}

const carsList: IAuctionVehicle[] = [
  {
    name: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio magni consequuntur ratione laudantium.",
    km: "0",
    year: 2021,
    coverImage: Car1,
    price: "48500",
    owner: "Matheus Santos",
  },
  {
    name: "BMW M4 2022 Limited Edition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio magni consequuntur ratione laudantium.",
    km: "0",
    year: 2022,
    coverImage: Car2,
    price: "118900.99",
    owner: "Alexandre Mélega",
  },
  {
    name: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio magni consequuntur ratione laudantium.",
    km: "0",
    year: 2016,
    coverImage: Car1,
    price: "73700",
    owner: "Gustavo Costa",
  },
];

function AuctionList() {
  return (
    <>
      <List>
        {carsList.length !== 0 ? (
          carsList.map((car, index) => <AuctionCard key={index} car={car} />)
        ) : (
          <h3>Não há carros para Leilão!</h3>
        )}
      </List>
    </>
  );
}

export default AuctionList;
