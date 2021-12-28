export const authReducer = (state, action) => {
  // Check the action type
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
