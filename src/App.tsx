import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ButtonBase } from "./components/Button";
import Ways from "./routes/routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Ways />
      <ButtonBase colorbutton="OutlineBrand" type="submit">
        Text Button
      </ButtonBase>
      <ToastContainer />
    </>
  );
}

export default App;
