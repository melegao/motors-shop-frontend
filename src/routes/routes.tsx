import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ProductDetails from "../pages/productDetails";
import { LoginPage } from "../pages/login";
import Admin from "../pages/admin";
import ProfileViewUser from "../pages/profileViewUser";
import { SignInPage } from "../pages/signIn";

function Ways() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign" element={<SignInPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile/:id" element={<ProfileViewUser />} />
      </Routes>
    </>
  );
}

export default Ways;
