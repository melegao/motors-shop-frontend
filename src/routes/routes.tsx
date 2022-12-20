import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ProductDetails from "../pages/productDetails";
import { LoginPage } from "../pages/login";

function Ways() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default Ways;
