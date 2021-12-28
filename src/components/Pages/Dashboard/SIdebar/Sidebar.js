import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Time from "../../../Layout/Time/Time";
import profile_image from "../../../../assets/images/logo.png";

const Sidebar = () => {
  // const { user } = useContext(AuthenticationContext);
  const username = localStorage.getItem("user");
  const userId = localStorage.getItem("id");
  const avatar = localStorage.getItem("avatar");
  const setImageUrl = `https://emzzin-notepath.herokuapp.com/users/${userId}/avatar`;
  return (
    <div data-aos="fade-down" style={{ marginTop: "0" }}>
      <div className="time">
        <Time />
      </div>

      <div className="main-categories">
        <div className="profile">
          <div className="dp">
            <img src={avatar ? setImageUrl : profile_image} alt="dp" />
          </div>
          <p id="username">{username ? username : "Emzzin Gari."}</p>
        </div>
        <div className="links">
          <h5>General</h5>
          <Link to="/dashboard" className="sidebar-link">
            <h5 className="category">
              <i className="fas fa-sticky-note"></i>Todos
            </h5>
          </Link>
          <Link to="/dashboard/tasks" className="sidebar-link">
            <h5 className="category">
              <i className="fas fa-list-ul"></i>Records
            </h5>
          </Link>
          <Link to="/dashboard/charts" className="sidebar-link">
            <h5 className="category">
              <i className="fas fa-chart-line"></i>Performance
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
