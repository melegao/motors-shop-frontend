import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/home";
import ProductDetails from "../pages/productDetails";
import { LoginPage } from "../pages/login";
import Admin from "../pages/admin";
import ProfileViewUser from "../pages/profileViewUser";
import { SignInPage } from "../pages/signIn";
import { useVehicleContext } from "../context/ProductContext";
import { useEffect } from "react";

function Ways() {

  const navigate = useNavigate();

  const { logged } = useVehicleContext();

  useEffect(() => {
    if (!logged){
      navigate('/')
    }
  }, [])

  


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign" element={<SignInPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<ProfileViewUser />} />
      </Routes>
    </>
  );
}

export default Ways;
