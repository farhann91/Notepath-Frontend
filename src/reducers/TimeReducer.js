export default (state, action) => {
  switch (action.type) {
    //   Get Tasks
    case "GET_TIME":
      return {
        ...state,
        currentTime: action.payload,
      };
    default:
      return state;
  }
};
