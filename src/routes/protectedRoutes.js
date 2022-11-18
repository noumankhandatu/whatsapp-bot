import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wrapper from "../components/molecule/wrapper";
import Navbar from "../components/molecule/navbar";
import Home from "../pages/home/index";
function ProtectedRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {["/", "/home"].map((path, index) => (
          <Route
            key={index}
            exact
            path={path}
            element={
              <Wrapper>
                <Home />
              </Wrapper>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}

export default ProtectedRoutes;
