import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import SuccessModal from "../../components/SuccessModal";
import { FormSignIn } from "./FormSignIn";
import { ColorContainer, SignInContainer } from "./style";

export const SignInPage = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  return (
    <>
      <ColorContainer>
        <Header />
        <SignInContainer>
          <FormSignIn setShowSuccessModal={setShowSuccessModal} />
          {showSuccessModal && (
            <SuccessModal setShowSuccessModal={setShowSuccessModal} />
          )}
        </SignInContainer>
        <Footer />
      </ColorContainer>
    </>
  );
};
