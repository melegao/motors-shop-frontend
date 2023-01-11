import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckCommentProvider } from "./context/CheckComment";
import { CheckTypeProvider } from "./context/CheckTypeContext";
import { EditProfileProvider } from "./context/EditProfileContext";
import { VehicleProvider } from "./context/ProductContext";

import Ways from "./routes/routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <EditProfileProvider>
        <CheckCommentProvider>
          <VehicleProvider>
            <CheckTypeProvider>
              <GlobalStyle />
              <Ways />
              <ToastContainer />
            </CheckTypeProvider>
          </VehicleProvider>
        </CheckCommentProvider>
      </EditProfileProvider>
    </>
  );
}

export default App;
