import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckTypeProvider } from "./context/CheckTypeContext";
import { EditProfileProvider } from "./context/EditProfileContext";
import { VehicleProvider } from "./context/ProductContext";

import Ways from "./routes/routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <CheckTypeProvider>
        <EditProfileProvider>
          <VehicleProvider>
            <GlobalStyle />
            <Ways />
            <ToastContainer />
          </VehicleProvider>
        </EditProfileProvider>
      </CheckTypeProvider>
    </>
  );
}

export default App;
