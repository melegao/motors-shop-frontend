import CardProdut from "../CardProduct";
import { CarouselProductsContainer } from "./styles";
import { useEffect } from "react";
import { useVehicleContext } from "../../context/ProductContext";
import api from "../../services/api";


function CarouselProducts({ props }: any) {

  const { allVehicles, setAllVehicles } = useVehicleContext()

  useEffect(() => {
    api
      .get(`/vehicles`)
      .then((res) => setAllVehicles(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CarouselProductsContainer>
      {props === 'car'? 
        allVehicles?.map((product, index) => product.type === props && (
          <CardProdut key={product.id} product={product} type='motorcycles'/>
        ))
      :
      allVehicles?.map((product, index) => product.type === props && (
          <CardProdut key={product.id} product={product} type='motorcycles'/>
        ))
      }
    </CarouselProductsContainer>
  );
}

export default CarouselProducts;
