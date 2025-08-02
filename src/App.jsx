import "./App.css";
import { BrowserRouter } from "react-router-dom"; // ✅ to'g'ri import
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <MainRoutes /> {/* ✅ route larni chaqirish */}
    </BrowserRouter>
  );
}