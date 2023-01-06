import { useEffect } from "react";
import AuctionList from "../../components/AuctionList";
import { Button } from "../../components/Button/style";
import CarouselProducts from "../../components/CarouselProducts";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { useVehicleContext } from "../../context/ProductContext";
import api from "../../services/api";
import { HomeContainer } from "./styles";

function Home() {

  const { allVehicles, setAllVehicles } = useVehicleContext()

  useEffect(() => {
    api
      .get(`/vehicles`)
      .then((res) => setAllVehicles(res.data))
      .catch((err) => console.log(err));
  }, []);


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
          <AuctionList />
        </div>

        <div className="div-carros">
          <h3>Carros</h3>
          <CarouselProducts props="car" arr={allVehicles}/>
        </div>
        <div className="div-motos">
          <h3>Motos</h3>
          <CarouselProducts props="motorcycle" arr={allVehicles}/>
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default Home;
