import React, { useState } from "react";

function Todolist() {
  const [todo, setTodo] = useState({ description: "", date: "" });
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([todo, ...todos]);
    setTodo({ description: "", date: "" });
  };

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <input
        placeholder="description"
        value={todo.description}
        name="description"
        onChange={inputChanged}
      />
      <input
        placeholder="Date"
        type="date"
        value={todo.date}
        name="date"
        onChange={inputChanged}
      />
      <button onClick={addTodo}>Add</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.description}</td>
              <td>{todo.date}</td>
              <td>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Todolist;
