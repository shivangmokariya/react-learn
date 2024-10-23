import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      if (editIndex !== -1) {
        const updatedTodos = todos.map((item, index) =>
          index === editIndex ? todo : item
        );
        setTodos(updatedTodos);
        setEditIndex(-1); 
      } else {
        setTodos([...todos, todo]); 
      }
      setTodo(""); 
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setTodo(todos[index]);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this todo?");
    if (confirmDelete) {
      console.log(todos,"<<<<<todos");
      const newTodos = todos.filter((_, i) => i !== index);
      console.log(newTodos,"<<<<<<<<<newTodos");
      setTodos(newTodos);
    }
  };

  return (
    <>
      <div>
        <h1>Todo</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="task"
            value={todo}
            onChange={handleChange}
          />
          <button type="submit">{editIndex !== -1 ? "Update Todo" : "Add Todo"}</button>
        </form>
        <ol>
          {todos.map((item, index) => (
            <li key={index}>
              {editIndex === index ? (
                <input
                  type="text"
                  value={todo}
                  onChange={handleChange}
                  onBlur={() => setEditIndex(-1)} 
                />
              ) : (
                <span>{item}</span>
              )}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
