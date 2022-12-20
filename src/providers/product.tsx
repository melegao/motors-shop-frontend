import React, { createContext, useState } from "react";


interface ICar {
    id: string,
    name: string,
    description: string,
    km: number,
    year: number,
    coverImage: string,
    price: number,
    createdAt: Date,
    updatedAt: Date,
    carImages: string[]
}


// interface ICar {
//     allCars: string
//     setAllCars: (newValue: string) => void
// }

export type ProductContextProviderProps = {
    children: React.ReactNode
}

export const ProductContext = createContext({})

export const ProductContextProvider = ({children}: ProductContextProviderProps) => {

    const [allCars, setAllCars] = useState<ICar[]>([])

    return <ProductContext.Provider value={{allCars, setAllCars}}>{children}</ProductContext.Provider>
}
