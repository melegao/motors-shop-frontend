import { CardProductContainer } from "./style";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/style";
import { useState } from "react";
import EditProductModal from "../EditProductModal";



function CardProductAdmin ({product, sellerName, sellerId}: any) {

    const navigate = useNavigate()

    const [showEditProductModal, setShowEditProductModal] = useState(false)

    const openProduct = (id: string) => {
        window.scrollTo(0, 0)
        navigate(`/product/${id}`)
    }

    const handleClickSeller = () => {
        navigate(`/profile/${sellerId}`)
    }

    const openProductPage = () => {
        navigate(`/product/${product.id}`)
    }

    const handleModal = () => {
        setShowEditProductModal(!showEditProductModal)
    }
    
    return(
        <CardProductContainer>
            {showEditProductModal && <EditProductModal setShowEditProductModal={setShowEditProductModal} productId={product.id}/>}
            <div className="product-image" onClick={() => openProduct(product.id)}>
                <img src={product.coverImage} alt={product.name} width={310}/>
            </div>
            <h2 className="product-title" onClick={() => openProduct(product.id)}>{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="div-product-owner">
                <div className="owner-initials" onClick={() => handleClickSeller()}>
                    <p>SL</p>
                </div>
                <p className="owner-name" onClick={() => handleClickSeller()}>{sellerName}</p>
            </div>
            <div className="product-details">
                <div>
                    <span>{product.km}</span>
                    <span>{product.year}</span>
                </div>
                <p>{Number(product.price).toLocaleString("pt-BR", {
                    style: 'currency',
                    currency: 'BRL'
                })}</p>
            </div>
            <div className="product-btns-admin">
                <Button onClick={() => handleModal()}>Editar</Button>
                <Button onClick={() => openProductPage()}>Ver como</Button>
            </div>
        </CardProductContainer>
    )
}

export default CardProductAdmin