import React, { useContext, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Home from "./components/Pages/Home/Home";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import Login from "./components/Pages/Login/Login";
import Signup from "./components/Pages/Signup/Singup";
import ForgotPassword from "./components/Pages/Login/ForgotPassword";
import NotFound from "./components/Pages/404NotFound/404NotFound";
import Pricing from "./components/Pages/Pricing/Pricing";
import Features from "./components/Pages/Features/Features";
import ResetPassword from "./components/Pages/Login/ResetPassword";
import VerifyAccount from "./components/Pages/Login/VerifyAccount";
import ProtectedRoute from "./components/Pages/ProtectedRoute/ProtectedRoute";
import { AuthenticationContext } from "./contexts/AuthenticationContext";
import "./App.css";

import { TaskProvider } from "./contexts/TaskContext";
import { AuthenticationProvider } from "./contexts/AuthenticationContext";
import { TimeProvider } from "./contexts/TimeContext";

import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const history = useHistory();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  let { isAuthenticated, checkTokenInLocalStorage } = useContext(
    AuthenticationContext
  );

  // A function to restrict user from accessing some pages after login
  const restrictUser = () => {
    const path = window.location.pathname;
    const token = localStorage.getItem("token");
    if (token) {
      if (
        path.includes("signup") ||
        path.includes("login") ||
        path.includes("veryfyAccount") ||
        path.includes("forgotpassword")
      ) {
        history.push("/dashboard");
      }
    }
  };

  useEffect(() => {
    checkTokenInLocalStorage();
    restrictUser();
  }, []);

  // console.log("logged state from the App", isAuthenticated);
  if (localStorage.getItem("token")) {
    isAuthenticated = "true";
  }
  // console.log("logged state from the the change", isAuthenticated);

  return (
    <div className="App">
      <AuthenticationProvider>
        {}
        <TaskProvider>
          <TimeProvider>
            <div className="upperContentOtherThanFooter">
              <Header></Header>
              <div className="containerd main-wrapper">
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/pricing" exact component={Pricing} />
                  <Route path="/features" exact component={Features} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/signup" exact component={Signup} />
                  <Route
                    path="/veryfyAccount/:user"
                    exact
                    component={VerifyAccount}
                  />
                  <Route
                    path="/resetpassword"
                    exact
                    component={ResetPassword}
                  />
                  <Route
                    path="/forgotpassword"
                    exact
                    component={ForgotPassword}
                  />
                  <ProtectedRoute
                    path="/dashboard"
                    component={Dashboard}
                    auth={isAuthenticated}
                  />
                  <Route component={NotFound} />;
                </Switch>
              </div>
            </div>
            <Footer></Footer>
          </TimeProvider>
        </TaskProvider>
      </AuthenticationProvider>
    </div>
  );
};
//

export default App;
