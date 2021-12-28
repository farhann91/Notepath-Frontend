import React, { useState } from "react";
import "./Signup.css";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  let history = useHistory();

  // Setting password vissibility
  const [passwordVissibility, setPasswordVissibility] = useState(false);
  const handleTogglePasswordVissibilty = () => {
    setPasswordVissibility(!passwordVissibility);
  };
  // State of Values
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordAgain: "",
  });

  // State of errors
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    passwordAgain: "",
  });

  // A function to validate the user input values
  let validateInfo = (inputValues) => {
    let myErrors = {};

    if (!inputValues.email) {
      myErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(inputValues.email)) {
      myErrors.email = "Email is not valid";
    }
    if (!inputValues.password) {
      myErrors.password = "Password is required";
    } else if (inputValues.password.length < 8) {
      myErrors.password = "Password needs to be 8 characters or more";
    }
    if (!inputValues.passwordAgain) {
      myErrors.passwordAgain = "Second password is required";
    } else if (inputValues.passwordAgain !== inputValues.password) {
      myErrors.passwordAgain = "Passwords do not match";
    }

    return myErrors;
  };

  // OnChange handling
  let onChange = (e) => {
    // Setting the values on the input depending on user input
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  let handleSignupFormSubmission = async (e) => {
    e.preventDefault();

    // setting the errors in their respective span depending on user input
    setErrors(validateInfo(values));

    // Sending to the API

    let response = await fetch(
      "https://emzzin-notepath.herokuapp.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
          passwordAgain: values.passwordAgain,
        }),
      }
    );
    let data = await response.json();

    if (data.error || data.error_message) {
      console.log(data);
    }

    // If within the data object are no errors the redirects
    if (!data.error && !data.error_message) {
      // Clearing the input fields
      setValues({ email: "", password: "", passwordAgain: "" });
      console.log(data);

      // Set the new user email,in the localstorage
      localStorage.setItem("user_verification_requester", data.user.email);

      // Redirect to dashbord page
      history.push(`/veryfyAccount/${data.user.email}`);
    }
  };
  return (
    <div className="signUpFormDiv">
      <form className="signUpForm" onSubmit={handleSignupFormSubmission}>
        <div className="spanLogo">
          <div className="logos"></div>
        </div>
        <h3 style={{ textAlign: "center" }}>Signup</h3>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="invalid form-control"
            // type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={onChange}
          />
          <small className="text-danger">{errors.email}</small>
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
          />
          {errors.password && (
            <small className="text-danger">{errors.password}</small>
          )}
        </div>

        <div className="form-group  mt-3">
          <label htmlFor="exampleInputPassword1">Password again:</label>
          <input
            type={passwordVissibility ? "text" : "password"}
            className="form-control"
            placeholder="Password again"
            name="passwordAgain"
            value={values.passwordAgain}
            onChange={onChange}
          />
          <div className="d-flex justify-content-between">
            {errors.passwordAgain && (
              <small className="text-danger">{errors.passwordAgain}</small>
            )}

            <small>
              Show password
              <input
                type="checkbox"
                name="showPassword"
                onClick={handleTogglePasswordVissibilty}
              />
            </small>
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="submit"
            value="Signup"
            className="form-control btn btn-primary"
          />
        </div>
        <div className="form-group mt-3 actionDiv">
          <p>
            Already a member? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
