import React from "react";
import PrivateRoutes from "./routes/privateRoutes";
import ProtectedRoutes from "./routes/protectedRoutes";
import { useSelector } from "react-redux";
const App = () => {
  const auth = useSelector((state) => state.tokenSlice);
  return <>{true ? <ProtectedRoutes /> : <PrivateRoutes />}</>;
};

export default App;
