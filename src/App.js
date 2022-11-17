import React from "react";
import PrivateRoutes from "./routes/privateRoutes";
import ProtectedRoutes from "./routes/protectedRoutes";
import { useSelector } from "react-redux";
const App = () => {
  const permission = useSelector((state) => state.tokenSlice);
  return <>{permission ? <ProtectedRoutes /> : <PrivateRoutes />}</>;
};

export default App;
