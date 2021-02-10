import React from 'react';
import TodoItem from './components/TodoItem';

const colors = ['grey', 'red', 'blue', 'orange', 'green'];

function App() {
  const [currentColor,setCurrentColor] = React.useState(`${colors[1]}`)
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      text: 'Попробовать создать ToDo',
      color: 'blue'
    },
    {
      id: 2,
      text: 'Сохранить задачи в массив стейта',
      color: 'blue'
    },
  ]);

  const inputRef = React.useRef();

  const addTask = (text, color) => {
    let newId = tasks[tasks.length-1].id + 1;
    setTasks([...tasks, {id:newId , text:text, color: color}])
  }

  const handleEnterInput = (e) => {
    if (e.key === "Enter"){
      addTask(inputRef.current.value, currentColor);
      e.target.value = '';
    }
  
    
  };

  const handlePickColor = (e) => {
    const target = e.target;
    setCurrentColor(target.getAttribute("color"));
    if(!target.classList.contains('active')){
      target.classList.add('active')
    }
  }

  const todoItemRef = React.useRef();

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач ({tasks.length})</h2>
        {tasks.map((obj) => (
          <TodoItem key={obj.id} text={obj.text} color={obj.color} todoItemRef={todoItemRef} />
        ))}
        <div className="todo-input">
            <input ref={inputRef} type="text" onKeyUp={handleEnterInput} placeholder="Текст задачи..."/>
          <ul>
            {colors.map((color) => (
              <li key={color} color={color} onClick={(e)=>handlePickColor(e)}
               className={`todo-color ${color === currentColor ? color + " active": color}`}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
