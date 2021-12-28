import React, { createContext, useReducer } from "react";
import TaskReducer from "../reducers/TaskReducer";

// The initial state
const intiatlState = {
  tasks: [],
  error: null,
  loading: true,
};

// Create a context
export const TaskContext = createContext(intiatlState);

// The provider component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TaskReducer, intiatlState);

  //   Actions to affect the Reducer for our context

  const getTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://emzzin-notepath.herokuapp.com/todos",
        {
          headers: new Headers({
            Authorization: `Bearer ${token}`,
          }),
        }
      );
      const data = await response.json();

      //Dispatch an action to the reducer to add the fetched data to the state
      dispatch({
        type: "GET_TASKS",
        payload: data.todos,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "TASK_ERROR",
        payload: error,
      });
    }
  };

  //   Delete a task
  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");
      fetch(`https://emzzin-notepath.herokuapp.com/todos/${id}`, {
        method: "DELETE",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
        }),
      });

      //Dispatch an action to the reducer to remove the deleted task from the state
      dispatch({
        type: "DELETE_TASK",
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: "TASK_ERROR",
        payload: error,
      });
    }
  };
  //   Shift a todo into the task document
  const shiftTask = async (task) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://emzzin-notepath.herokuapp.com/tasks",
        {
          method: "POST",
          headers: new Headers({
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }),
          body: JSON.stringify(task),
        }
      );
      const data = await response.json();
      // console.log(data);
    } catch (error) {
      dispatch({
        type: "TASK_ERROR",
        payload: error,
      });
    }
  };

  //   Add a task
  const addTask = async (task) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://emzzin-notepath.herokuapp.com/todos",
        {
          method: "POST",
          headers: new Headers({
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }),
          body: JSON.stringify(task),
        }
      );
      const data = await response.json();

      //Dispatch an action to the reducer to remove the deleted task from the state
      dispatch({
        type: "ADD_TASK",
        payload: data.task,
      });
    } catch (error) {
      dispatch({
        type: "TASK_ERROR",
        payload: error,
      });
    }
  };
  //   Update a task
  const updateTask = async (task) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://emzzin-notepath.herokuapp.com/${task._id}`,
        {
          method: "PATCH",
          headers: new Headers({
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }),
          body: JSON.stringify({ task: task.task }),
        }
      );
      const data = await response.json();
      // After the update, we fetch all the tasks dispatch add action to the reducer
      // dispatch({
      //   type: "TASK_UPDATE",
      //   payload: data.task,
      // });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        deleteTask,
        addTask,
        getTasks,
        shiftTask,
        updateTask,
        error: state.error,
        loading: state.loading,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
