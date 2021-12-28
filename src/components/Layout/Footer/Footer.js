import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-container">
        <span>©2020</span> | <span style={{ color: "#ffae00" }}>Notepath</span>{" "}
        |
        <span>
          {" "}
          With <i className="fas fa-heart" style={{ color: "red" }}></i> By
          Emzzin Gari
        </span>
      </div>
    </div>
  );
};

export default Footer;
