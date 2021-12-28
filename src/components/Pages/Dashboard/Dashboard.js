import React from "react";
import Content from "./Content/Content";
import "./Dashboard.css";
import Sidebar from "./SIdebar/Sidebar";

export default function Dashboard() {
  return (
    <div className="container dashboard">
      <Sidebar />
      <Content />
    </div>
  );
}
