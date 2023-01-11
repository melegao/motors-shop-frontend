import { CarouselProductsContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { IUser } from "../../context/ProductContext";
import api from "../../services/api";
import CardProdutOwner from "../CardProductOwner";
import { CheckTypeContext } from "../../context/CheckTypeContext";

function CarouselProductsOwner({ props, id }: any) {
  const [userInfo, setUserInfo] = useState<IUser | undefined>();

  const { isBikes, isCar, isCarOrBikesExists } = useContext(CheckTypeContext);

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => {
        setUserInfo(res.data);
        isCarOrBikesExists(res.data.vehicle);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CarouselProductsContainer>
      {props === "car" ? (
        !isCar ? (
          <p>Nenhum Carro Cadastrado</p>
        ) : (
          userInfo?.vehicle?.map(
            (elem) =>
              elem.type === props && (
                <CardProdutOwner
                  key={elem.id}
                  product={elem}
                  sellerName={userInfo.fullName}
                  sellerId={id}
                />
              )
          )
        )
      ) : !isBikes ? (
        <p>Nenhuma Moto Cadastrada</p>
      ) : (
        userInfo?.vehicle?.map(
          (elem) =>
            elem.type === props && (
              <CardProdutOwner
                key={elem.id}
                product={elem}
                sellerName={userInfo.fullName}
                sellerId={id}
              />
            )
        )
      )}
    </CarouselProductsContainer>
  );
}

export default CarouselProductsOwner;
