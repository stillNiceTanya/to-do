import TodoList from "./TodoList";
import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPannel";
import ItemStatusFilter from "./ItemStatusFilter";
import React from "react";

const App = () => {
  const todoData = [
    { id: 1, label: "Drink Coffee", important: false },
    { id: 2, label: "Smile", important: false },
    { id: 3, label: "Do some staff", important: true },
    { id: 4, label: "Do another staff", important: false },
  ];

  return (
    <div className="container">
      <AppHeader></AppHeader>
      <SearchPanel></SearchPanel>
      <ItemStatusFilter></ItemStatusFilter>
      <TodoList todos={todoData}></TodoList>
    </div>
  );
};

export default App;
