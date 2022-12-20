import { Button } from "../../components/Button/style"
import CarouselProducts from "../../components/CarouselProducts"
import Header from "../../components/header"
import { HomeContainer } from "./styles"


function Home () {


    return (
        <>
            <Header />
            <HomeContainer>
                <div className="div-initial-information">
                    <h2>Velocidade e experiência em um lugar feito para você</h2>
                    <h3>Um ambiente feito para você explorar o seu melhor</h3>
                    <div>
                        <Button colorbutton="BrandNew">Carros</Button>
                        <Button colorbutton="BrandNew">Motos</Button>
                    </div>
                </div>
                <div className="div-leilao">
                    <h3>Leilão</h3>
                    <div>CARROSSEL</div>
                </div>
                <div className="div-carros">
                    <h3>Carros</h3>
                    <CarouselProducts props="cars"/>
                    {/* <div>
                        <CardProdut />
                    </div> */}
                </div>
                <div className="div-motos">
                    <h3>Motos</h3>
                    <CarouselProducts props="motorcycles"/>
                </div>
            </HomeContainer>
        </>
    )
}

export default Home