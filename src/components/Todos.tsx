import React from "react";

const Todos: React.FC<{ text: string }> = (props) => {
  return <div>{props.text}</div>;
};

export default Todos;
