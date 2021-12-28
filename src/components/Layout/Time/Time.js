import React, { useEffect, useContext } from "react";
import { TimeContext } from "../../../contexts/TimeContext";
import moment from "moment";

const Time = () => {
  const { currentTime, getTime } = useContext(TimeContext);
  // The state
  let currentDay = moment().format("ll");

  useEffect(() => {
    getTime();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: " space-between",
        fontSize: "110%",
      }}
    >
      <div>{currentDay}</div>
      <div>{currentTime}</div>
    </div>
  );
};

export default Time;
