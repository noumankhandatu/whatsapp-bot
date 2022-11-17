import React from "react";
import PrivateRoutes from "./routes/privateRoutes";
import ProtectedRoutes from "./routes/protectedRoutes";

const App = () => {
  return (
    <div>
      <PrivateRoutes />
    </div>
  );
};

export default App;
