import React, { useState } from "react";

import css from "../../../Assets/CSS/TaskSection.module.css";
import bootstrap from "../../../Assets/CSS/bootstrap.css";

import axios from "axios";

const api = axios.create({
  // baseURL: 'http://127.0.0.1:8000/'
});

function TaskSection() {
  // States

  const [Tasks, setTask] = useState(Array);

  const [ActiveItem, setActiveItem] = useState({
    id: null,
    title: "",
    completed: false,
  });

  const [Editing, setEditing] = useState(false);

  api
    .get("api/task-list/")
    .then((res) => {
      setTask(res.data);
    })
    .catch((err) => {
      console.log("Something went wrong !");
    });

  const fetchTasks = () => {
    api
      .get("api/task-list/")
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => {
        console.log("Something went wrong !");
      });
  };

  // Functions

  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrftoken = getCookie("csrftoken");

    let url = "api/task-create/";

    if (Editing === true) {
      url = `api/task-update/${ActiveItem.id}/`;
      setEditing(false);
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        title: ActiveItem.title,
        id: ActiveItem.id,
        completed: ActiveItem.completed,
      }),
    })
      .then((res) => {})
      .catch((err) => {});
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setActiveItem({
      ...name,
      title: value,
      ...name,
      id: ActiveItem.id,
      ...name,
      completed: ActiveItem.completed,
    });
  };

  const startEdit = (task) => {
    setActiveItem(task);
    setEditing(true);
  };

  const deleteItem = (task) => {
    const csrftoken = getCookie("csrftoken");
    fetch(`api/task-delete/${task.id}/`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
    }).then((res) => {
      fetchTasks();
    });
  };

  const strikeUnstrike = (task) => {
    task.completed = !task.completed;

    let csrftoken = getCookie("csrftoken");

    let url = `api/task-update/${task.id}`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({ completed: task.completed, title: task.title }),
    })
      .then(() => {
        fetchTasks();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="" id={css["my-container"]}>
        <div id={css["task-container"]}>
          <div id={css["form-wrapper"]}>
            <form onSubmit={handleSubmit} id="form">
              <div className={css["flex-wrapper"]}>
                <div style={{ flex: 6 }}>
                  <input
                    onChange={handleChange}
                    className="form-control"
                    id="title"
                    value={ActiveItem.title}
                    type="text"
                    name="title"
                    placeholder="Add task.."
                  />
                </div>

                <div style={{ flex: 1 }}>
                  <input
                    id={css.submit}
                    className="btn btn-warning"
                    type="submit"
                    name="Add"
                  />
                </div>
              </div>
            </form>
          </div>

          <div id="list-wrapper">
            {Tasks.map((task, index) => (
              <div
                key={index}
                className={`${css["task-wrapper"]} ${css["flex-wrapper"]}`}
              >
                <div onClick={() => strikeUnstrike(task)} style={{ flex: 7 }}>
                  {task.completed == false ? (
                    <span>{task.title}</span>
                  ) : (
                    <strike>{task.title}</strike>
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <button
                    onClick={() => startEdit(task)}
                    className="btn btn-sm btn-outline-info"
                  >
                    Edit
                  </button>
                </div>

                <div style={{ flex: 1 }}>
                  <button
                    onClick={() => deleteItem(task)}
                    className="btn btn-sm btn-outline-dark delete"
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskSection;
