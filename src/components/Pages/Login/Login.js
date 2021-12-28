import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "../../../contexts/AuthenticationContext";

const Login = () => {
  let { loginUser, error } = useContext(AuthenticationContext);

  // State of Values
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // Toggle the password vissibility
  const [passwordVissibility, setPasswordVissibility] = useState(false);
  const handleTogglePasswordVissibilty = () => {
    setPasswordVissibility(!passwordVissibility);
  };

  const credentials = {
    email: values.email,
    password: values.password,
  };

  // On page load, check for error on the error function
  useEffect(() => {
    error = "";
  }, []);

  const handleLoginFormSubmission = (e) => {
    e.preventDefault();
    loginUser(credentials);
  };

  // OnChange handling
  let onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="loginFormDiv">
      <form className="loginForm" onSubmit={handleLoginFormSubmission}>
        <div className="spanLogo">
          <div className="logos"></div>
        </div>
        <h3 style={{ textAlign: "center" }}>Login</h3>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group  mt-3">
          <label htmlFor="exampleInputPassword1">Password:</label>
          <input
            type={passwordVissibility ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={onChange}
            required
          />
        </div>
        <small>
          Show password
          <input
            type="checkbox"
            name="showPassword"
            onClick={handleTogglePasswordVissibilty}
          />
        </small>
        {error && <small className="text-danger">{error}</small>}
        <div className="form-group mt-3">
          <input
            type="submit"
            value="Login"
            className="form-control btn btn-primary"
          />
        </div>

        <div className="form-group mt-3 actionDiv">
          <p>
            Dont have an account? <Link to="/signup">Signup</Link>
          </p>
          <Link to="/forgotpassword">Forgot password</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
