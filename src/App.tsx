import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VehicleProvider } from "./context/ProductContext";

import Ways from "./routes/routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <VehicleProvider>
        <GlobalStyle />
        <Ways />
        <ToastContainer />
      </VehicleProvider>
    </>
  );
}

export default App;
