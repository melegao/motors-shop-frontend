import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckCommentProvider } from "./context/CheckComment";
import { CheckTypeProvider } from "./context/CheckTypeContext";
import { EditProfileProvider } from "./context/EditProfileContext";
import { VehicleProvider } from "./context/ProductContext";
import { UpdateApiProvider } from "./context/UpdateApi";

import Ways from "./routes/routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <UpdateApiProvider>
        <CheckTypeProvider>
          <EditProfileProvider>
            <CheckCommentProvider>
              <VehicleProvider>
                <GlobalStyle />
                <Ways />
                <ToastContainer />
              </VehicleProvider>
            </CheckCommentProvider>
          </EditProfileProvider>
        </CheckTypeProvider>
      </UpdateApiProvider>
    </>
  );
}

export default App;
