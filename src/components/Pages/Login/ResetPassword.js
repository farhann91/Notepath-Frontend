import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import queryString from "query-string";

const ResetPassword = (props) => {
  // State of Values
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordAgain: "",
  });

  // State of errors
  const [errors, setErrors] = useState({
    password: "",
    passwordAgain: "",
  });

  let history = useHistory();

  // A function to validate the user input values
  let validateInfo = (inputValues) => {
    let myErrors = {};

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

  //   Getting the query params from the url
  const userId = queryString.parse(props.location.search).userId;
  //   console.log(userId);
  //   const query = new URLSearchParams(props.location.search);
  //   const token = query.get("userId");
  //   console.log(token);
  let handleSignupFormSubmission = async (e) => {
    e.preventDefault();
    console.log(userId);

    // setting the errors in their respective span depending on user input
    setErrors(validateInfo(values));

    // Sending to the API
    // const userId = ``

    let response = await fetch(
      `https://emzzin-notepath.herokuapp.com/resetPassword?userId=${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: values.password,
          passwordAgain: values.passwordAgain,
        }),
      }
    );
    let data = await response.json();
    console.log(data);

    if (data.error) {
      console.log(data);
    }

    // If within the data object are no errors the redirects
    if (!data.error && !data.error_message) {
      // Clearing the input fields
      setValues({ email: "", password: "", passwordAgain: "" });
      // Redirect to dashbord page
      history.push("/login");
    }
  };

  return (
    <div className="signUpFormDiv">
      <form className="signUpForm" onSubmit={handleSignupFormSubmission}>
        <div className="spanLogo">
          <div className="logos"></div>
        </div>
        <h3 style={{ textAlign: "center" }}>Reset password</h3>
        <div className="form-group  mt-3">
          <label htmlFor="exampleInputPassword1">New password:</label>
          <input
            type="password"
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
          <label htmlFor="exampleInputPassword1">Repeat new Password:</label>
          <input
            type="password"
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
              <input type="checkbox" name="showPassword" id="" />
            </small>
          </div>
        </div>
        <div className="form-group mt-3">
          <input
            type="submit"
            value="Reset"
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

export default ResetPassword;
