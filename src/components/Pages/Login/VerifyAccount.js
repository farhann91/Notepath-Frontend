import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const VerifyAcount = () => {
  const history = useHistory();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, []);

  // function to login the use/ Change the isAuthenticated state to true
  const handleLoginFormSubmission = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("user_verification_requester");

    let response = await fetch(
      `https://emzzin-notepath.herokuapp.com/verifyAccount/${email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          otp,
        }),
      }
    );

    let data = await response.json();

    // If the there is no error message property in the data sent back. we redirect the user and dispatch login action
    if (!data.error_message) {
      console.log(data);
      localStorage.removeItem("user_verification_requester");
      setError("");
      history.push("/dashboard");
    }
    if (data.error_message) {
      setError(data.error_message);
    }
  };
  return (
    <div className="signUpFormDiv">
      <form className="signUpForm" onSubmit={handleLoginFormSubmission}>
        <div className="spanLogo">
          <div className="logos"></div>
        </div>
        <h3 style={{ textAlign: "center" }}>Verify your account</h3>
        <div className="form-group">
          <label htmlFor="email">OTP:</label>
          <input
            className="form-control"
            type="number"
            required
            placeholder="893666"
            name="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        {error && <small className="text-danger">{error}</small>}
        <div className="form-group mt-3">
          <input
            type="submit"
            value="Verify"
            className="form-control btn btn-primary"
          />
        </div>
        <div className="form-group mt-3 actionDiv"></div>
      </form>
    </div>
  );
};

export default VerifyAcount;
