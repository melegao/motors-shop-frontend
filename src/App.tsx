import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ways from './routes/routes';
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Ways />
      <ToastContainer />
    </>
  );
}

export default App;
