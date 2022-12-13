import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ways from './routes/routes';

function App() {
  return (
    <>
      <Ways />
      <ToastContainer />
    </>
  );
}

export default App;
