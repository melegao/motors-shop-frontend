import CardProdut from "../CardProduct";
import { CarouselProductsContainer } from "./styles";
import axios from "axios";
import { useEffect } from "react";
import { useVehicleContext } from "../../context/ProductContext";


function CarouselProducts({ props }: any) {

  const { allCars, setAllCars, allMotorcycles, setAllMotorcycles } = useVehicleContext()

  useEffect(() => {
    axios
      .get(`http://localhost:3333/${props}`)
      .then((res) => {props === 'cars'? setAllCars(res.data) : setAllMotorcycles(res.data)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <CarouselProductsContainer>
      {props === 'cars'? 
        allCars?.map((product, index) => (
          <CardProdut key={product.id} product={product} />
        ))
      :
        allMotorcycles?.map((product, index) => (
          <CardProdut key={product.id} product={product} />
        ))
      }
    </CarouselProductsContainer>
  );
}

export default CarouselProducts;
