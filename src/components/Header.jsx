import React, { useContext } from "react";
import "../css/Header.css";
import { TodoContext } from "../context/TodoStore.jsx";

const Header = () => {
  const { todos } = useContext(TodoContext);
  
  return (
    <>
      <h1>HELLO TODO 애플리케이션</h1>
      <div className="countInfo">
        해야할일! {todos.filter(v => v.status === "todo").length}개 있습니다.
      </div>
    </>
  );
};

export default Header;