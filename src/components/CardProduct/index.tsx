import { CardProductContainer } from "./styles";



function CardProdut ({product}: any) {

    
    return(
        <CardProductContainer>
            <div className="product-image">
                <img src={product.coverImage} alt={product.name} width={312}/>
            </div>
            <h2 className="product-title">{product.name}</h2>
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