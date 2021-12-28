import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import "./PaymentModal.css";
const PaymentModal = (props) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
  }, []);

  //   A function to make a post request to the server carrying the phone number
  const sendPhoneToServer = async () => {
    const response = await fetch(
      "https://emzzin-notepath.herokuapp.com/simulate",
      {
        method: "POST",
        body: JSON.stringify({ phone: phone, amount: props.amount }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.body.errorMessage) {
      return setError(data.body.errorMessage);
    }
    setPhone("");
    props.handleClose();
    setError("");
  };

  //Handle form subssion
  const handleFormSubmission = (e) => {
    e.preventDefault();
    sendPhoneToServer();
  };
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        style={{ color: "#585050", fontWeight: "300" }}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#585050", fontWeight: "300" }}>
            Payment{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="spanLogo">
            <div className="logos"></div>
          </div>
          <small style={{ textAlign: "center", marginBottom: "20px" }}>
            You will recieve a pop up on your phone from Mpesa. Complete payment
            by keying in your mpesa PIN and press Make Payment
          </small>
          <form className="paymentForm" onSubmit={handleFormSubmission}>
            <div className="form-group phoneInput">
              <label htmlFor="phone">Phone:</label>
              <input
                type="number"
                placeholder="254 7123456789"
                required
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            {error && <small className="text-danger">{error}</small>}
            <input
              type="submit"
              value="Make payment"
              className="form-control btn btn-primary paymentSubmitButton"
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PaymentModal;
