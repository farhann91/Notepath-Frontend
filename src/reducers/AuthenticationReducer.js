export default (state, action) => {
  switch (action.type) {
    //   Case to login the user
    case "LOGIN_USER":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        error: "",
        user: action.payload,
      };
    //   Case to login the user
    case "PERSIST_USER":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };
    // A case to persist the user if there is a token on the localstroge
    case "AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: true,
      };
    case "NOT_AUTHENTICATED":
      return {
        ...state,
        isAuthenticated: false,
      };
    //   Case to Logout the user
    case "LOGOUT_USER":
      return {
        ...state,
        isAuthenticated: false,
      };
    //   Case to Logout the user
    case "LOGIN_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    //   Get Tasks
    case "GET_TASKS":
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    default:
      return state;
  }
};
