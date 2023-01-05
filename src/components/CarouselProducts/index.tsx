import CardProdut from "../CardProduct";
import { CarouselProductsContainer } from "./styles";
import { useEffect } from "react";
import { useVehicleContext } from "../../context/ProductContext";
import api from "../../services/api";


function CarouselProducts({ props }: any) {

  const { allCars, setAllCars } = useVehicleContext()

  useEffect(() => {
    api
      .get(`/vehicles`)
      .then((res) => setAllCars(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CarouselProductsContainer>
      {props === 'car'? 
        allCars?.map((product, index) => product.type === props && (
          <CardProdut key={product.id} product={product} type='motorcycles'/>
        ))
      :
      allCars?.map((product, index) => product.type === props && (
          <CardProdut key={product.id} product={product} type='motorcycles'/>
        ))
      }
    </CarouselProductsContainer>
  );
}

export default CarouselProducts;
