import Header from "../../components/header"
import Carro1 from '../../assets/images/carro1.png'
import { ProductContainer } from "./styles"
import { Button } from "../../components/Button/style"


function ProductDetails () {

    

    return (
        <>            
            <Header />

            <ProductContainer>

                <div className="background-blue"></div>
                <div className="div-container-desktop">
                    <div className="div-cover-photo">
                        <img src={Carro1} alt='Carro'/>
                    </div>
                    <div className="div-resume">
                            <h2>Mercedes Benz A 200 CGI</h2>
                            <div className="div-resume-feat">
                                <span>2013</span>
                                <span>0 KM</span>
                            </div>
                            <p className="p-price">R$ 00.000,00</p>
                            <Button colorbutton="Brand">Comprar</Button>
                    </div>
                    <div className="div-description">
                        <h2>Descrição</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ab officia, optio cupiditate perspiciatis 
                            beatae necessitatibus. Esse in deleniti facere praesentium consectetur aut, tenetur quisquam 
                            illo blanditiis fugit velit est?</p>
                    </div>
                    <div className="div-photos">
                        <h2>Fotos</h2>
                        <div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
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
                        <div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
                            <div>foto</div>
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
        </>
    )
}

export default ProductDetails