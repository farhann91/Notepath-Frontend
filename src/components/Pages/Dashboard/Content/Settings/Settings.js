import React, { useState, useContext } from "react";
import "./Settings.css";
import { AuthenticationContext } from "../../../../../contexts/AuthenticationContext";

const Settings = () => {
  const { logoutAll, deleteAccount } = useContext(AuthenticationContext);
  const [file, setFile] = useState("");
  const [error, setError] = useState("");

  const sendImageToDatabase = async () => {
    const token = localStorage.getItem("token");
    let data = new FormData();
    data.append("avatar", file);
    const response = await fetch(
      "https://emzzin-notepath.herokuapp.com/users/avatar",
      {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
        body: data,
      }
    );
    const feedback = await response.json();
    if (!feedback.error || !feedback) {
      localStorage.setItem("avatar", true);
      window.location.reload();
    }
    setError(feedback.error);
  };
  const handleOnsubmitImageForm = (e) => {
    e.preventDefault();
    sendImageToDatabase();
    setError("");
  };

  const style = {
    padding: "50px",
  };

  // A function to logout from all devices
  const handleLogoutAll = (e) => {
    e.preventDefault();
    logoutAll();
  };
  const handleDeleteAccount = (e) => {
    e.preventDefault();
    deleteAccount();
  };
  return (
    <div className="settingsWrapper">
      <div className="card imageUploader" data-aos="fadu-up" style={style}>
        <form className="imageUploadForm" onSubmit={handleOnsubmitImageForm}>
          <div className="form-group">
            <label htmlFor="dp">Upload profile image</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <div className="file_instructionsAndErrorMsg">
              {error && <small className="text-danger">{error}</small>}
              <small>Maximum file size is 1mb</small>
            </div>
          </div>
          <input
            type="submit"
            value="Upload"
            className="form-control imageUploadBtn btn btn-primary"
          />
        </form>
      </div>
      <div className="userPreferences">
        <form
          className="logoutAll"
          data-aos="fade-right"
          onSubmit={handleLogoutAll}
        >
          <div className="form-group">
            <input
              className="btn btn-warning form-control"
              type="submit"
              value="Logout from all devices"
            />{" "}
          </div>
        </form>
        <form
          className="deleteAccount"
          data-aos="fade-left"
          onSubmit={handleDeleteAccount}
        >
          <div className="form-group">
            <input
              className="btn btn-danger form-control"
              type="submit"
              value="Delete Acount"
            />{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
