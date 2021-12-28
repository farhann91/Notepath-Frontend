import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  // let history = useHistory();
  // State of Values
  const [values, setValues] = useState({
    email: "",
  });

  let onChange = (e) => {
    // Setting the values on the input depending on user input
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // function to login the use/ Change the isAuthenticated state to true
  const handleLoginFormSubmission = async (e) => {
    e.preventDefault();

    let response = await fetch(
      "https://emzzin-notepath.herokuapp.com/forgotPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
        }),
      }
    );

    let data = await response.json();
    console.log(data);

    // If the there is no error message property in the data sent back. we redirect the user and dispatch login action
    if (!data.error_message) {
      setValues({ ...values, email: "" });
      // Dispatch the action to the reducer
      // dispatch({ type: "LOGIN" });
      // Redirect to dashbord page
      // history.push("/dashboard");
    }
  };
  return (
    <div className="signUpFormDiv">
      <form className="signUpForm" onSubmit={handleLoginFormSubmission}>
        <div className="spanLogo">
          <div className="logos"></div>
        </div>
        <h3 style={{ textAlign: "center" }}>Request new password</h3>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-control"
            type="temailext"
            required
            placeholder="Email used to signup"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </div>
        <div className="form-group mt-3">
          <input
            type="submit"
            value="Request"
            className="form-control btn btn-primary"
          />
        </div>
        <div className="form-group mt-3 actionDiv">
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
