import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import Ways from "./routes/routes";
import globaltheme from "./styles/themes/globaltheme";

function App() {
  return (
    <>
      <ThemeProvider theme={globaltheme}>
        <Ways />

        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
