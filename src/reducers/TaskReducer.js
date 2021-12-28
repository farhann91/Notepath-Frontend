export default (state, action) => {
  switch (action.type) {
    //   Get Tasks
    case "GET_TASKS":
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    //   Case for deleting a task
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    //   Case for adding a task
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    //   Case for requesting a task update
    case "TASK_UPDATE_REQUEST":
      return {
        ...state,
        taskToUpdate: action.payload,
      };
    //   Case for updating the state of the taskToUpdate in the state
    case "UPDATE_TASK_TO_UPDATE":
      return {
        ...state,
        taskToUpdate: action.payload,
      };
    //   Case for updatin a task update
    case "TASK_UPDATE":
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? (task = action.payload) : task
        ),
      };
    //   A case for getting the errors
    case "TASK_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
