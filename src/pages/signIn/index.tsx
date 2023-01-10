import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import { SuccessModal } from "../../components/Modal";
import { FormSignIn } from "./FormSignIn";
import { ColorContainer, SignInContainer } from "./style";

export const SignInPage = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <ColorContainer>
        <Header />
        <SignInContainer>
          <FormSignIn setShowSuccessModal={setState} />
          {state && (
            <SuccessModal
              header="Sucesso!"
              setShowSuccessModal={setState}
              title="Sua conta foi criada com sucesso!"
              text="Agora você poderá ver seus negócios crescendo em grande escala"
              type="signIn"
            />
          )}
        </SignInContainer>
        <Footer />
      </ColorContainer>
    </>
  );
};
