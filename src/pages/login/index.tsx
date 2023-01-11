import Footer from "../../components/Footer";
import Header from "../../components/header";
import { FormLogin } from "./FormLogin";
import { ColorContainer, LoginContainer } from "./style";

export const LoginPage = () => {
  return (
    <>
      <ColorContainer>
        <Header />
        <LoginContainer className="teste">
          <FormLogin />
        </LoginContainer>
        <Footer />
      </ColorContainer>
    </>
  );
};
