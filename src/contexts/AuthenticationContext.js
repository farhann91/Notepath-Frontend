import React, { createContext, useReducer } from "react";
import AuthenticationReducer from "../reducers/AuthenticationReducer";

import { useHistory } from "react-router-dom";

// The initial state
const intiatlState = {
  isAuthenticated: false,
  error: null,
  loading: true,
};

// Create a context
export const AuthenticationContext = createContext(intiatlState);

// The provider component
export const AuthenticationProvider = ({ children }) => {
  let history = useHistory();
  const [state, dispatch] = useReducer(AuthenticationReducer, intiatlState);

  //   Actions to affect the Reducer for our context
  //   Add a task
  const loginUser = async (userCredentials) => {
    try {
      const response = await fetch(
        "https://emzzin-notepath.herokuapp.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCredentials),
        }
      );
      const data = await response.json();

      // Setting the email in the localstotage

      if (data.error_message) {
        if (data.error_message === "verify user") {
          localStorage.setItem("user_verification_requester", data.email);
          history.push(`/veryfyAccount/${data.email}`);
        }
        dispatch({
          type: "LOGIN_ERROR",
          payload: data.error_message,
        });
      }
      if (!data.error_message && !data.error) {
        console.log(data);
        if (data.hasAvatar) {
          localStorage.setItem("avatar", "true");
          // localStorage.setItem("userId", data.user._id);
        }
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user.email);
        localStorage.setItem("id", data.user._id);
        //Dispatch an action to the reducer to remove the deleted task from the state
        dispatch({
          type: "LOGIN_USER",
          payload: { userDate: data.user, token: data.token },
        });
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "LOGIN_ERROR",
        payload: error,
      });
    }
  };

  //   Logout user
  const logoutUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://emzzin-notepath.herokuapp.com/logout",
        {
          method: "POST",
          headers: new Headers({
            Authorization: `Bearer ${token}`,
          }),
        }
      );

      const data = await response.json();

      dispatch({
        type: "LOGOUT_USER",
      });
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("avatar");
      localStorage.removeItem("userId");
      localStorage.removeItem("id");
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  //   Logout user
  const logoutAll = async () => {
    try {
      const token = localStorage.getItem("token");
      await fetch("https://emzzin-notepath.herokuapp.com/logoutAll", {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      });
    } catch (error) {}
    dispatch({
      type: "LOGOUT_ALL",
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    localStorage.removeItem("userId");
    localStorage.removeItem("id");
    history.push("/login");
  };

  // Delete account
  const deleteAccount = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://emzzin-notepath.herokuapp.com/users/`,
        {
          method: "DELETE",
          headers: new Headers({ Authorization: `Bearer ${token}` }),
        }
      );
      const data = await response.json();
      console.log(data);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("avatar");
      localStorage.removeItem("userId");
      localStorage.removeItem("id");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // A function that runs everytime the app renders to check whether there is a token
  const checkTokenInLocalStorage = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // Dispatch Isauthenticated to false
      dispatch({
        type: "NOT_AUTHENTICATED",
      });
    } else {
      // Dispath Isauthenticated to be true
      dispatch({
        type: "AUTHENTICATED",
      });
    }
  };

  // To check whether the account is verified
  /*  On page load(App) check localstoage for verified=true, if not redirect to Verifyaccount page */

  return (
    <AuthenticationContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loginUser,
        logoutUser,
        logoutAll,
        deleteAccount,
        checkTokenInLocalStorage,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
