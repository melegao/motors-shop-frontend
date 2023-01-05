import { createContext, ReactNode, useContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface IVehicle {
  id: string;
  name: string;
  description: string;
  km: string;
  year: number;
  coverImage: string;
  price: string;
  createdAt: string;
  updatedAt: string;
  type: string;
  vehicleImages: { id: string; url: string }[];
}

interface IUser {
  address?: {
    city: string;
    complement?: string;
    id: string;
    number: string;
    state: string;
    street: string;
    zipCode: string;
  };
  birthDate: string;
  cellPhone: string;
  cpf: string;
  description: string;
  email: string;
  fullName: string;
  id: string;
  isSeller: boolean;
  vehicle?: {
    coverImage: string;
    createdAt: string;
    description: string;
    id: string;
    km: string;
    name: string;
    price: string;
    type: string;
    updatedAt: string;
    vehicleImages: { id: string; url: string }[];
  }[];
}

type vehicleContextType = {
  allVehicles: IVehicle[];
  setAllVehicles: React.Dispatch<React.SetStateAction<IVehicle[]>>;
  logged: boolean;
  setLogged: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
};

const VehicleContext = createContext<vehicleContextType>(
  {} as vehicleContextType
);

export function VehicleProvider({ children }: ProviderProps) {
  const [allVehicles, setAllVehicles] = useState<IVehicle[]>([]);
  const [logged, setLogged] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>();

  return (
    <VehicleContext.Provider
      value={{
        allVehicles,
        setAllVehicles,
        logged,
        setLogged,
        user,
        setUser,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicleContext() {
  return useContext(VehicleContext);
}
