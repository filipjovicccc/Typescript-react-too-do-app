import React from "react";
import Todo from "../modules/Todo";
import Todos from "./Todos";

const TodosList: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Todos key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default TodosList;
