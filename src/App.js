import "./App.css";
import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import { collection } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data().task));
      return setTodos(snapshot.docs.map((doc) => doc.data().task));
    });
  }, []);

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
