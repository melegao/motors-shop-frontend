import { createContext, ReactNode, useContext, useState } from "react";

interface ProviderProps {
    children: ReactNode
}

interface IVehicle {
    id: string;
    name: string;
    description: string;
    km: string;
    year: number
    coverImage: string
    price: string
    createdAt: string
    updatedAt: string
}

interface ICar extends IVehicle{
    carImages: {id: string, url: string}[]
}

interface IMotorcycle extends IVehicle{
    motorcycleImages: {id: string, url: string}[]
}

type vehicleContextType = {
    allCars: ICar[]
    setAllCars: React.Dispatch<React.SetStateAction<ICar[]>>
    allMotorcycles: IMotorcycle[]
    setAllMotorcycles: React.Dispatch<React.SetStateAction<IMotorcycle[]>>
}

const VehicleContext = createContext<vehicleContextType>({} as vehicleContextType)

export function VehicleProvider({children}: ProviderProps){

    const [allCars, setAllCars] = useState<ICar[]>([])
    const [allMotorcycles, setAllMotorcycles] = useState<IMotorcycle[]>([])

    return(
        <VehicleContext.Provider value={{allCars, setAllCars, allMotorcycles, setAllMotorcycles}}>
            {children}
        </VehicleContext.Provider>
    )
}

export function useVehicleContext(){
    return useContext(VehicleContext)
}