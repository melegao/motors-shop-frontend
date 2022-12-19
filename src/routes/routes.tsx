import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import ProductDetails from '../pages/productDetails'

function Ways () {

    return(
        <>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/produto' element={<ProductDetails />}/>
            </Routes>
        </>
    )
}

export default Ways