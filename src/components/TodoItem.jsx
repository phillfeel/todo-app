function TodoItem({text,color,todoItemRef}) {
  const removeItem = () => {
    console.log('remove item')
    console.log(todoItemRef);
  }

  return (
    <div ref={todoItemRef} className="todo-item">
      <div className="todo-checkbox">
        <label htmlFor="todo-0">
          <input type="checkbox" id="todo-0" />
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M505 75a26 26 0 00-37 0L162 382 44 264a26 26 0 00-37 37l136 136c10 10 27 9 37 0l325-325c10-10 9-27 0-37z"></path>
            </svg>
          </div>
        </label>
      </div>
      <div className={`todo-delimiter ${color}`}></div>
      <p className="todo-text">{text}</p>
      <div className="todo-actions">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 384">
          <path d="M0 304v80h80l236-236-80-80zM378 56L328 6c-8-8-22-8-30 0l-39 39 80 80 39-39c8-8 8-22 0-30z"></path>
        </svg>
          <svg onClick={()=>removeItem()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" >
            <path  d="M63 48l32-33v-2L83 1a2 2 0 00-2 0L48 33 15 1h-2L1 13v2l32 33L1 81v2l12 12a2 2 0 002 0l33-32 33 32a2 2 0 002 0l12-12v-2L63 48z"></path>
          </svg>
      </div>
    </div>
  );
}

export default TodoItem;
