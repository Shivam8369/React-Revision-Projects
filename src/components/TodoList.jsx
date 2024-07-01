import React, { useState } from "react";
import "../CSS/todo.css"

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const[isUpdating, setUpdating] = useState(false);
  const [updateIndex,setIndex] = useState(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addItem = () => {
    if (input.trim().length !== 0) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeItem = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const updateItem = ()=>{
    let newTodos = [...todos];
    newTodos[updateIndex] = input;
    setTodos(newTodos);
    setInput("");
    setUpdating(false);
  }

  const startUpdate = (index)=>{
    setUpdating(true);
    setIndex(index);
    setInput(todos[index]);
  }

  

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Todo-APP</h1>
      <input
        type="text"
        value={input}
        placeholder="Enter your Todo Work"
        onChange={handleInput}
      />
      <button onClick={isUpdating ? updateItem : addItem}> {isUpdating ? "Update" : "ADD"} </button>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <div style={{ marginRight: "10px" }}>
                <button style={{ marginRight: "10px" }} onClick={() => removeItem(index)}>Remove</button>
                <button style={{ marginRight: "10px" }} onClick={() => startUpdate(index)}>Update</button>
              </div>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
