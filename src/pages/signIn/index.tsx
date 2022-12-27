import Footer from "../../components/Footer";
import Header from "../../components/header";
import { FormSignIn } from "./FormSignIn";
import { ColorContainer, SignInContainer } from "./style";

export const SignInPage = () => {
  return (
    <>
      <ColorContainer>
        <Header />
        <SignInContainer>
          <FormSignIn />
        </SignInContainer>
        <Footer />
      </ColorContainer>
    </>
  );
};
