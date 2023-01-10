import CardProdut from "../CardProduct";
import { CarouselProductsContainer } from "./styles";
import { useContext, useEffect } from "react";
import { CheckTypeContext } from "../../context/CheckTypeContext";
// import { useVehicleContext } from "../../context/ProductContext";
// import api from "../../services/api";

function CarouselProducts({ props, arr }: any) {
  const { isBikes, isCar, isCarOrBikesExists } = useContext(CheckTypeContext);
  useEffect(() => {
    isCarOrBikesExists(arr);
  }, [arr, isCarOrBikesExists]);

  return (
    <CarouselProductsContainer>
      {props === "car" ? (
        !isCar ? (
          <h3>Nenhum Carro Cadastrado</h3>
        ) : (
          arr?.map(
            (product: any) =>
              product.type === props && (
                <CardProdut key={product.id} product={product} />
              )
          )
        )
      ) : !isBikes ? (
        <h3>Nenhuma Moto Cadastrada</h3>
      ) : (
        arr?.map(
          (product: any) =>
            product.type === props && (
              <CardProdut key={product.id} product={product} />
            )
        )
      )}
    </CarouselProductsContainer>
  );
}

export default CarouselProducts;
