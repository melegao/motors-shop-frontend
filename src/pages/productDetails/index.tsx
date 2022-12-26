import Header from "../../components/header"
import Carro1 from '../../assets/images/carro1.png'
import { ProductContainer } from "./styles"
import { Button } from "../../components/Button/style"
import { useVehicleContext } from "../../context/ProductContext"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer"
import api from "../../services/api"


function ProductDetails () {

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
        carImages?: {id: string, url: string}[]
        motorcycleImages?: {id: string, url: string}[]
    }


    const { id } = useParams()

    const type = id?.slice(37)
    const newId = id?.slice(0, 36)

    const [vehicle, setVehicle] = useState<IVehicle>()

    useEffect(() => {
        api
          .get(`${type}/${newId}`)
          .then((res) => setVehicle(res.data))
          .catch((err) => console.log(err));
      }, []);

    return (
        <>            
            <Header />

            <ProductContainer>

                <div className="background-blue"></div>
                <div className="div-container-desktop">
                    <div className="div-cover-photo">
                        <img src={vehicle?.coverImage} alt='Carro' className="cover-photo"/>
                    </div>
                    <div className="div-resume">
                            <h2>{vehicle?.name}</h2>
                            <div className="div-resume-desktop">
                            <div className="div-resume-feat">
                                <span>{vehicle?.year}</span>
                                <span>{vehicle?.km}</span>
                            </div>
                            <p className="p-price">R$ {vehicle?.price.replace(".", ",")}</p>
                            </div>
                            <Button colorbutton="Brand">Comprar</Button>
                    </div>
                    <div className="div-description">
                        <h2>Descrição</h2>
                        <p>{vehicle?.description}</p>
                    </div>
                    <div className="div-photos">
                        <h2>Fotos</h2>
                        <div className="div-vehicles-photos">
                            {type === 'cars'?
                                <>
                                {vehicle?.carImages?.map((elem) => <img key={elem.id} src={elem.url} alt={vehicle.name} width='100rem'/>)}
                                </>
                            :
                                <>
                                {vehicle?.motorcycleImages?.map((elem) => <img key={elem.id} src={elem.url} alt={vehicle.name} width='100rem'/>)}
                                </>
                            }
                        </div>
                    </div>
                    <div className="div-seller">
                        <div className="seller-photo">
                            <p>SL</p>
                        </div>
                        <h2>Samuel Leão</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ab officia, optio cupiditate perspiciatis 
                            beatae necessitatibus.</p>
                        <Button colorbutton="Grey" sizebutton="default">Ver todos anúncios</Button>
                    </div>
                </div>

                <div className="div-aside-desktop">
                    <div className="div-photos-desktop">
                        <h2>Fotos</h2>
                        <div className="div-vehicles-photos">
                            {type === 'cars'?
                                <>
                                {vehicle?.carImages?.map((elem) => <img key={elem.id} src={elem.url} alt={vehicle.name} width='100rem'/>)}
                                </>
                            :
                                <>
                                {vehicle?.motorcycleImages?.map((elem) => <img key={elem.id} src={elem.url} alt={vehicle.name} width='100rem'/>)}
                                </>
                            }
                        </div>
                    </div>
                    <div className="div-seller-desktop">
                        <div className="seller-photo">
                            <p>SL</p>
                        </div>
                        <h2>Samuel Leão</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ab officia, optio cupiditate perspiciatis 
                            beatae necessitatibus.</p>
                        <Button colorbutton="Grey" sizebutton="default">Ver todos anúncios</Button>
                    </div>
                </div>

            </ProductContainer>

            <Footer />
        </>
    )
}

export default ProductDetails