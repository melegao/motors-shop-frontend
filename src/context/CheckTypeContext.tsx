import { createContext, useState } from "react";
import { ICheck } from "../interfaces/checkTypes.interfaces";
import { Ichildren } from "../interfaces/react.interfaces";

export const CheckTypeContext = createContext<ICheck>({} as ICheck);

export const CheckTypeProvider = ({ children }: Ichildren) => {
  const [isCar, setIsCar] = useState(false);
  const [isBikes, setIsBikes] = useState(false);

  const isCarOrBikesExists = (arr: any): void => {
    const car = arr.filter((elem: any) => elem.type === "car");
    const bike = arr.filter((elem: any) => elem.type === "motorcycle");

    if (car.length > 0) {
      setIsCar(true);
    }
    if (bike.length > 0) {
      setIsBikes(true);
    }
  };

  return (
    <CheckTypeContext.Provider value={{ isCarOrBikesExists, isCar, isBikes }}>
      {children}
    </CheckTypeContext.Provider>
  );
};
