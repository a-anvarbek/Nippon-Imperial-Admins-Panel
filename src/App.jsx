import "./App.css";
import { BrowserRouter } from "react-router"; 
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes /> 
    </BrowserRouter>
  );
}

export default App;