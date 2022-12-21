import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ProductDetails from "../pages/productDetails";
import { LoginPage } from "../pages/login";
import Admin from "../pages/admin";

function Ways() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default Ways;
