import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import ProductDetails from "../pages/productDetails";
import { LoginPage } from "../pages/login";
import Admin from "../pages/admin";
import ProfileViewUser from "../pages/profileViewUser";

function Ways() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<ProfileViewUser />} />
      </Routes>
    </>
  );
}

export default Ways;
