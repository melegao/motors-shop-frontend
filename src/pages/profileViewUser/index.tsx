import CarouselProducts from "../../components/CarouselProducts"
import Footer from "../../components/Footer"
import Header from "../../components/header"
import { ProfileContainer } from "./styles"


function ProfileViewUser () {

    // DEVE RECEBER O ID DO SELLER POR PROPS
    // FILTRAR OS ANUNCIOS PELO ID DO SELLER E RENDERIZAR
    // DADOS COMERCIAIS E ANÚNCIOS.


    return (
        <>
            <Header />

            <ProfileContainer>
                <div className="background-blue"></div>

                <div className="userInfo">
                    <div className="photo">SL</div>
                    <h2 className="nameTitle">
                    Samuel Leão <span>Anunciante</span>
                    </h2>
                    <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos aliquid, ut molestias quaerat nisi recusandae at sint
                    corporis.
                    </p>
                </div>

                <div className="cars">
                    <h3>Carros</h3>
                    <CarouselProducts props="cars"/>
                </div>

                <div className="motorcycles">
                    <h3>Motos</h3>
                    <CarouselProducts props="motorcycles"/>
                </div>


            </ProfileContainer>

            <Footer />
        
        </>
    )
}

export default ProfileViewUser