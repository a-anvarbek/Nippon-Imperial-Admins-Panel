import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./routes";

// Import Pages
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import LoginAfter from "../pages/LoginAfter";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LogIn />} />
      <Route path={ROUTES.LOGINAFTER} element={<LoginAfter />} />
      

    </Routes>
  );
};

export default MainRoutes;
