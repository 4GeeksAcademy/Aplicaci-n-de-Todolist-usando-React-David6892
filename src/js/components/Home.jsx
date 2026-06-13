import { useState } from "react";


const Home = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>todos</h1>

      <ul className="todo-list">
        <li>
          <input
            type="text"
            placeholder="¿Qué necesitas hacer?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </li>

        {todos.length === 0 ? (
          <li className="empty">No hay tareas, añadir tareas</li>
        ) : (
          todos.map((todo, index) => (
            <li key={index} className="task">
              {todo}
              <span
                className="delete"
                onClick={() => deleteTodo(index)}
              >
                ✖
              </span>
            </li>
          ))
        )}
      </ul>

      <div className="footer">
        {todos.length} tarea{todos.length !== 1 ? "s" : ""} pendiente{todos.length !== 1 ? "s" : ""}
      </div>
    </div>
  );
};

export default Home;