import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import AuctionList from "../../components/AuctionList";
import { Button } from "../../components/Button/style";
import CarouselProducts from "../../components/CarouselProducts";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { useVehicleContext } from "../../context/ProductContext";
import api from "../../services/api";
import { HomeContainer } from "./styles";

function Home() {
  const { allVehicles, setAllVehicles } = useVehicleContext();

  useEffect(() => {
    api
      .get(`/vehicles`)
      .then((res) => setAllVehicles(res.data))
      .catch((err) => console.log("Tente novamente mais tarde."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <HomeContainer>
        <div className="div-initial-information">
          <h2>Velocidade e experiência em um lugar feito para você</h2>
          <h3>Um ambiente feito para você explorar o seu melhor</h3>
          <div>
            <Button
              width="100%"
              colorbutton="Brand2"
              className="text-decoration"
            >
              <HashLink smooth to="/#car-list">
                Carros
              </HashLink>
            </Button>
            <Button
              width="100%"
              colorbutton="Brand2"
              className="text-decoration"
            >
              <HashLink smooth to="/#motorcycle-list">
                Motos
              </HashLink>
            </Button>
          </div>
        </div>
        <div className="div-leilao" id="auction-list">
          <h3>Leilão</h3>
          <AuctionList />
        </div>

        <div className="div-carros" id="car-list">
          <h3>Carros</h3>
          <CarouselProducts props="car" arr={allVehicles} />
        </div>
        <div className="div-motos" id="motorcycle-list">
          <h3>Motos</h3>
          <CarouselProducts props="motorcycle" arr={allVehicles} />
        </div>
      </HomeContainer>
      <Footer />
    </>
  );
}

export default Home;
