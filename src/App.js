import "./App.css";
import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log("👌", input);

  const addTodo = (event) => {
    event.preventDefault();
    console.log("🤣", "I am working");
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <FormControl>
          <InputLabel>✅Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          ></Input>
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todos) => {
          return <Todo text={todos} />;
        })}
      </ul>
    </div>
  );
}

export default App;
