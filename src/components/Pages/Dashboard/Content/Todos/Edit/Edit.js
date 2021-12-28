import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { TaskContext } from "../../../../../../contexts/TaskContext";
import "./Edit.css";

const Edit = (props) => {
  let history = useHistory();
  const { updateTask } = useContext(TaskContext);

  const [task, setTask] = useState("");

  const id = props.match.params.id;
  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://emzzin-notepath.herokuapp.com/todos/${id}`,
        {
          headers: new Headers({
            Authorization: `Bearer ${token}`,
          }),
        }
      );
      const data = await response.json();

      setTask(data.task.task);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const newTask = {
    task,
    _id: id,
  };

  //   Function to handle form submission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    updateTask(newTask);
    setTask("");
    history.push("/dashboard");
  };

  return (
    <div className="editForm">
      <form
        onSubmit={handleFormSubmission}
        style={{
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <div className="form-group">
          <label htmlFor="task">Edit task:</label>
          <input
            type="text"
            placeholder="Enter task"
            className="form-control"
            maxLength="100"
            required
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <input
          style={{ margin: "10px 0" }}
          type="submit"
          className="btn btn-primary form-control"
          value="Update task"
        />
        <div className="form-group instructions">
          <small>Max characters is 100</small>
          <small>
            Character count <span>{100 - task.length}</span>
          </small>
        </div>
      </form>
    </div>
  );
};

export default Edit;
