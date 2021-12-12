import { List } from "@material-ui/core";
import React from "react";

function Todo(props) {
  return (
    <List></List>
    <div>
      <li>{props.text}</li>
    </div>
  );
}

export default Todo;
