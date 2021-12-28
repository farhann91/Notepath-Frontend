import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { AuthenticationContext } from "./contexts/AuthenticationContext";

import { AuthenticationProvider } from "./contexts/AuthenticationContext";

ReactDOM.render(
  <AuthenticationProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthenticationProvider>,
  document.getElementById("root")
);
