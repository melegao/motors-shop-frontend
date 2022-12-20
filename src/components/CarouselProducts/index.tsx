import CardProdut from "../CardProduct"
import { CarouselProductsContainer } from "./styles"
import axios from 'axios'
import { useEffect, useState } from "react"


function CarouselProducts ({props}: any) {
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        
        axios.get(`http://localhost:3333/${props}`)
            .then((res) => setProducts(res.data))
            .catch((err) => console.log(err))
        
    }, [])

    
    return (
        <CarouselProductsContainer>
            {products?.map((product, index) => <CardProdut key={index} product={product} />)}
        </CarouselProductsContainer>
    )
}

export default CarouselProducts