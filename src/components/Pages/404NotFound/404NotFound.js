import React from "react";
import "./notFound.css";

const NotFound = () => {
  return (
    <div className="theWrapper">
      <div
        className="headertext container notFoundText"
        data-aos="fade-down"
        style={{ color: "#585050", fontWeight: "300" }}
      >
        <h3 style={{ fontWeight: "300", textTransform: "capitalize" }}>
          Lost And Found!
        </h3>

        <p>
          Well sorry that you found yourself at this point. Its clearly that
          something went wrong. You could either be playing with the developers
          of the site or you dont realy know your moves here. All in all you
          cannot really hurt us. We will now kindly ask you to click one of the
          links in the navigation abouve{" "}
          <i className="fas fa-hand-point-up" style={{ fontSize: "150%" }}></i>
        </p>
        <h1 style={{ fontSize: "400%" }}>404</h1>
      </div>
    </div>
  );
};

export default NotFound;
