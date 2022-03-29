import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Register} path="/Register" />
      <Route component={ForgotPassword} path="/ForgotPassword" />
    </BrowserRouter>
  );
};

export default Routes;
