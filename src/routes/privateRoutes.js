import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wrapper from "../components/molecule/wrapper";
import Navbar from "../components/molecule/navbar";
import SignIn from "../pages/signInQR";
import ErrorPage from "../pages/error";

function PrivateRoutes() {
  return (
    <Router>
      <Routes>
        {["/", "/home"].map((path, index) => (
          <Route key={index} exact path={path} element={<SignIn />} />
        ))}
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default PrivateRoutes;
