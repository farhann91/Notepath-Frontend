import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthenticationContext } from "../../../contexts/AuthenticationContext";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  let { isAuthenticated } = useContext(AuthenticationContext);

  if (localStorage.getItem("token")) {
    isAuthenticated = "true";
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) return <Component {...rest} />;
        if (!isAuthenticated)
          return (
            <Redirect to={{ pathname: "/login", state: props.location }} />
          );
      }}
    ></Route>
  );
};

export default ProtectedRoute;
