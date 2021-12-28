import React, { createContext, useReducer } from "react";
import TimeReducer from "../reducers/TimeReducer";
import moment from "moment";

// The initial state
const intiatlState = {
  currentDay: moment().format("ll"),
  currentTime: "",
};

// Create a context
export const TimeContext = createContext(intiatlState);

// The provider component
export const TimeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TimeReducer, intiatlState);

  //   Actions to affect the Reducer for our context
  //   A function to update the time in every second
  const getTime = () => {
    //Dispatch an action to the reducer to update the time
    setInterval(() => {
      dispatch({
        type: "GET_TIME",
        payload: moment().format("LTS"),
      });
    }, 1000);
  };
  return (
    <TimeContext.Provider
      value={{
        currentTime: state.currentTime,
        getTime,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};
