import React, { useState } from "react";
import "./Pricing.css";
import image from "./lipa_na_mpesa.png";
import PaymentModal from "./Payment-modal/Payment-modal";

const Pricing = () => {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Function to call the show modal passing it the amount
  const makePayment = (specifiedAmount) => {
    setAmount(specifiedAmount);
    handleShow();
  };
  return (
    <div>
      <PaymentModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        amount={amount}
      />
      <div
        className="headertext container useless"
        data-aos="fade-down"
        style={{ color: "#585050", fontWeight: "300" }}
      >
        <h3 style={{ fontWeight: "300", textTransform: "capitalize" }}>
          Subscribe to support local developers <i className="fas fa-heart"></i>
        </h3>
        <p>
          Upgrade your daily perfomance with the user our time and task
          management application. Everyday spent without pre planed events is
          simple a gamble. Even our free plan can significantly improve your
          time management upto 35%. Other techniques that we offer like the
          popmodoro has obtained world recongnition as a super time and task
          management technique. Consider getting atleast our silver plan and
          ejoy the integreted experience. Remember every shilling that you
          invest in is invested in the development of african growth.
        </p>
      </div>
      <div className="pricing-cards">
        <div className="container">
          <div className="card" data-aos="fade-up">
            <div className="card-header">Standard</div>
            <div className="card-body" style={{ paddingTop: "110px" }}>
              <h4>Free</h4>
              <hr />
              <p>
                <i className="fas fa-check "></i>Unlimited daily todos
              </p>
              <p>
                <i className="fas fa-times"></i>Integreted pomodoro time
              </p>
              <p>
                <i className="fas fa-times"></i>Daily colorful charts reports
              </p>
              <p>
                <i className="fas fa-times"></i>Export your report as Pdf file
              </p>
              <p>
                <i className="fas fa-times"></i>Share your perfomance on online
              </p>
              <hr />
              <button className="btn btn-primary" form-control disabled>
                Purchase
              </button>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div
              className="card-header"
              style={{
                background: "black",
                color: "whitesmoke",
              }}
            >
              <i class="fas fa-chess-queen pricing-icons"></i>Silver
            </div>
            <div className="card-body">
              <img
                src={image}
                alt="mpesa"
                style={{ width: "250px", height: "80px" }}
              />{" "}
              <hr />
              <h4>Ksh: 250/= Monthily</h4>
              <hr />
              <p>
                <i className="fas fa-check"></i>Unlimited daily todos
              </p>
              <p>
                <i className="fas fa-check"></i>Integreted pomodoro time
              </p>
              <p>
                <i className="fas fa-check"></i>Daily colorful charts reports
              </p>
              <p>
                <i className="fas fa-times"></i>Export your report as Pdf file
              </p>
              <p>
                <i className="fas fa-times"></i>Share your perfomance on online
              </p>
              <hr />
              <button
                className="btn btn-primary"
                form-control
                onClick={() => makePayment(250)}
              >
                Purchase
              </button>
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div className="card-header" style={{ background: "gold" }}>
              <i className="fas fa-crown pricing-icons"></i>Gold
            </div>
            <div className="card-body">
              <img
                src={image}
                alt="mpesa"
                style={{ width: "250px", height: "80px" }}
              />{" "}
              <hr />
              <h4>Ksh: 500/= Monthily</h4>
              <hr />
              <p>
                <i className="fas fa-check"></i>Unlimited daily todos
              </p>
              <p>
                <i className="fas fa-check"></i>Integreted pomodoro time
              </p>
              <p>
                <i className="fas fa-check"></i>Daily colorful charts reports
              </p>
              <p>
                <i className="fas fa-check"></i>Export your report as Pdf file
              </p>
              <p>
                <i className="fas fa-check"></i>Share your perfomance on online
              </p>
              <hr />
              <button
                className="btn btn-primary"
                form-control
                onClick={() => makePayment(500)}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
