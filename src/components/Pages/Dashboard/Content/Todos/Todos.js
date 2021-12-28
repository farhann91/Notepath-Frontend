import React, { useContext, useState, useEffect } from "react";
import { TaskContext } from "../../../../../contexts/TaskContext";
import "./Todo.css";
import { useHistory } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Charts = () => {
  let history = useHistory();
  const { tasks, deleteTask, addTask, getTasks, shiftTask } =
    useContext(TaskContext);

  let user = localStorage.getItem("user");

  useEffect(() => {
    getTasks();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   Getting the state of the form
  const [task, setTask] = useState("");
  const newTask = {
    task,
  };

  //   Function to handle form submission
  const handleFormSubmission = (e) => {
    e.preventDefault();
    addTask(newTask);
    setTask("");
  };
  // A function to edit an existing task
  const handleEditTask = async (task) => {
    history.push(`/dashboard/edit/${task._id}`);
  };
  // Shift a success task
  const success = (task) => {
    const newTask = { ...task, status: "success" };
    shiftTask(newTask);
    deleteTask(task._id);
  };
  // shift a failure task
  const failuire = (task) => {
    const newTask = { ...task, status: "fail" };
    shiftTask(newTask);
    deleteTask(task._id);
  };

  const [todos, updateTodos] = useState(tasks);

  // Function to reorder todos after dragging
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateTodos(items);
  }
  return (
    <div>
      <form
        onSubmit={handleFormSubmission}
        style={{
          marginBottom: "20px",
          padding: "10px",
        }}
      >
        <div className="form-group">
          <label htmlFor="task">Task:</label>
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
          value="Add task"
        />
        <div className="form-group instructions">
          <small>Max characters is 100</small>
          <small>
            Character count <span>{100 - task.length}</span>
          </small>
        </div>
      </form>
      <hr />
      {tasks.length ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div
                className="card-wrapper"
                style={{ background: "#D4D3D9" }}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tasks.map((task, index) => {
                  return (
                    <Draggable
                      key={task._id}
                      draggableId={task._id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="card"
                          id="card"
                          data-aos="fade-up"
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <p>{task.task}</p>
                          <div
                            className="buttons"
                            style={{ borderTop: "1px solid #d6d6d6f8" }}
                          >
                            <div className="actionButtons">
                              <button
                                className="btn btn-sm btn-warning"
                                onClick={() => handleEditTask(task)}
                              >
                                <i
                                  className="far fa-edit"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit task"
                                ></i>
                              </button>

                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => deleteTask(task._id)}
                              >
                                <i
                                  className="far fa-trash-alt"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Delete task pamanentily"
                                ></i>
                              </button>
                            </div>
                            <div className="task-status-bttons">
                              <button
                                className="btn btn-sm btn-success"
                                onClick={() => success(task)}
                              >
                                <i
                                  className="fas fa-thumbs-up"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Accomplished task"
                                ></i>
                              </button>
                              <button className="btn btn-sm btn-danger">
                                <i
                                  className="fas fa-thumbs-down"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Unaccomplished task"
                                  onClick={() => failuire(task)}
                                ></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <h5 style={{ color: "gray", textAlign: "center" }}>
          Hello, {user} make this day count...
        </h5>
      )}
    </div>
  );
};

export default Charts;
