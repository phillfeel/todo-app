import React, { useEffect } from "react";
import TodoItem from "./components/TodoItem";

const colors = ["grey", "red", "blue", "orange", "green"];

function App() {
  const [currentColor, setCurrentColor] = React.useState(`${colors[0]}`);
  const [firstStart, setFirstStart] = React.useState(true);
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: "Запустить Todo by Bykov Philipp.",
      color: "green",
      completed: true,
    },
    {
      id: 2,
      text: "Выбрать цвет для заметки",
      color: "blue",
      completed: false,
    },
    {
      id: 3,
      text: "Написать заметку",
      color: "orange",
      completed: false,
    },
    {
      id: 4,
      text: "Изменить её текст и удалить",
      color: "grey",
      completed: false,
    },
    {
      id: 5,
      text: "Узнать что заметки сохраняются при перезагрузке страницы",
      color: "green",
      completed: false,
    },
  ]);

  if (firstStart) {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
    setFirstStart(false);
  } else {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  /* 
  if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      console.log("new write local store");
    } else {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
      console.log("parse and replace");
    }
  */

  /*  localStorage.setItem("tasks", JSON.stringify(tasks)); */

  const inputRef = React.useRef();

  const addTask = (text, color) => {
    let newId = tasks[tasks.length - 1].id + 1;
    setTasks([
      ...tasks,
      { id: newId, text: text, color: color, completed: false },
    ]);
  };

  const handleEnterInput = (e) => {
    if (e.key === "Enter") {
      addTask(inputRef.current.value, currentColor);
      e.target.value = "";
      setCurrentColor("grey");
      e.target.focus();
    }
  };

  const handlePickColor = (e) => {
    const target = e.target;
    setCurrentColor(target.getAttribute("color"));
    if (!target.classList.contains("active")) {
      target.classList.add("active");
    }
  };

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач ({tasks.length})</h2>
        {tasks.map((obj) => (
          <TodoItem
            setTasks={setTasks}
            tasks={tasks}
            id={obj.id}
            key={obj.id}
            text={obj.text}
            color={obj.color}
            completed={obj.completed}
          />
        ))}
        <div className="todo-input">
          <input
            ref={inputRef}
            type="text"
            onKeyUp={handleEnterInput}
            placeholder="Текст задачи..."
          />
          <ul>
            {colors.map((color) => (
              <li
                key={color}
                color={color}
                onClick={(e) => handlePickColor(e)}
                className={`todo-color ${
                  color === currentColor ? color + " active" : color
                }`}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
