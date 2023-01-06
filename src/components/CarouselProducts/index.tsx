import CardProdut from "../CardProduct";
import { CarouselProductsContainer } from "./styles";
import { useEffect } from "react";
import { useVehicleContext } from "../../context/ProductContext";
import api from "../../services/api";


function CarouselProducts({props, arr}: any) {

  return (
    <CarouselProductsContainer>
      {props === 'car'? 
        arr?.map((product: any) => product.type === props && (
          <CardProdut key={product.id} product={product}/>
        ))
      :
        arr?.map((product: any) => product.type === props && (
          <CardProdut key={product.id} product={product}/>
        ))
      }
    </CarouselProductsContainer>
  );
}

export default CarouselProducts;
