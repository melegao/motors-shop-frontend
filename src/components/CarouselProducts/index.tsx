import CardProdut from "../CardProduct";
import { CarouselProductsContainer } from "./styles";
import axios from "axios";
import { useEffect } from "react";
import { useVehicleContext } from "../../context/ProductContext";
import api from "../../services/api";


function CarouselProducts({ props }: any) {

  const { allCars, setAllCars, allMotorcycles, setAllMotorcycles } = useVehicleContext()

  useEffect(() => {
    api
      .get(`${props}`)
      .then((res) => {props === 'cars'? setAllCars(res.data) : setAllMotorcycles(res.data)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <CarouselProductsContainer>
      {props === 'cars'? 
        allCars?.map((product) => (
          <CardProdut key={product.id} product={product} type='cars'/>
        ))
      :
        allMotorcycles?.map((product, index) => (
          <CardProdut key={product.id} product={product} type='motorcycles'/>
        ))
      }
    </CarouselProductsContainer>
  );
}

export default CarouselProducts;
