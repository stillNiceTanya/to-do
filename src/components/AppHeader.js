import React from "react";
import "./AppHeader.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="app-header d-flex justify-content-around">
      <h1 className="header-title">Todo list</h1>
      <h2 className="header-subtitle">
        {toDo} more to do, {done} done
      </h2>
    </div>
  );
};

export default AppHeader;
