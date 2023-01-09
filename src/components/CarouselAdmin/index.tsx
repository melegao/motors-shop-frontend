import { CarouselProductsContainer } from "./style";
import { useEffect, useState } from "react";
import { IUser } from "../../context/ProductContext";
import api from "../../services/api";
import CardProdutOwner from "../CardProductOwner";
import CardProductAdmin from "../CardProductAdmin";


function CarouselAdmin({props, id}: any) {

  const [userInfo, setUserInfo] = useState<IUser | undefined>()

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err))
  },[])


  return (
    <CarouselProductsContainer>
      {props === 'car'? 
        userInfo?.vehicle?.map((elem) => elem.type === props && (
          <CardProductAdmin key={elem.id} product={elem} sellerName={userInfo.fullName} sellerId={id}/>
        ))
      :
        userInfo?.vehicle?.map((elem) => elem.type === props && (
          <CardProdutOwner key={elem.id} product={elem} sellerName={userInfo.fullName} sellerId={id}/>
        ))
      }
    </CarouselProductsContainer>
  );
}

export default CarouselAdmin;
