import { CarouselProductsContainer } from "./style";
import { useContext, useEffect, useState } from "react";
import { IUser } from "../../context/ProductContext";
import api from "../../services/api";
// import CardProdutOwner from "../CardProductOwner";
import CardProductAdmin from "../CardProductAdmin";
import { CheckTypeContext } from "../../context/CheckTypeContext";

function CarouselAdmin({ props, id }: any) {
  const [userInfo, setUserInfo] = useState<IUser | undefined>();

  const { isBikes, isCar, isCarOrBikesExists } = useContext(CheckTypeContext);

  useEffect(() => {
    api
      .get(`users/${id}`)
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userInfo !== undefined) {
      isCarOrBikesExists(userInfo.vehicle);
    }
  }, [userInfo, isCarOrBikesExists]);

  return (
    <CarouselProductsContainer>
      {props === "car" ? (
        !isCar ? (
          <h3>Nenhum Carro Cadastrado</h3>
        ) : (
          userInfo?.vehicle?.map(
            (elem) =>
              elem.type === props && (
                <CardProductAdmin
                  key={elem.id}
                  product={elem}
                  sellerName={userInfo.fullName}
                  sellerId={id}
                />
              )
          )
        )
      ) : !isBikes ? (
        <h3>Nenhuma Moto Cadastrada</h3>
      ) : (
        userInfo?.vehicle?.map(
          (elem) =>
            elem.type === props && (
              <CardProductAdmin
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

export default CarouselAdmin;
