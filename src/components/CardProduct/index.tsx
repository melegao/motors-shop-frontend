import { CardProductContainer } from "./styles";
import { useNavigate } from "react-router-dom";



function CardProdut ({product, type}: any) {

    const navigate = useNavigate()

    const openProduct = (id: string) => {
        window.scrollTo(0, 0)
        navigate(`/product/${id}-${type}`)
        console.log(id)
        console.log(type)
    }

    
    return(
        <CardProductContainer>
            <div className="product-image" onClick={() => openProduct(product.id)}>
                <img src={product.coverImage} alt={product.name} width={310}/>
            </div>
            <h2 className="product-title" onClick={() => openProduct(product.id)}>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="div-product-owner">
                <div className="owner-initials">
                    <p>SL</p>
                </div>
                <p className="owner-name">Samuel Leão</p>
            </div>
            <div className="product-details">
                <div>
                    <span>{product.km} KM</span>
                    <span>{product.year}</span>
                </div>
                <p>R$ {product.price}</p>
            </div>
        </CardProductContainer>
    )
}

export default CardProdut