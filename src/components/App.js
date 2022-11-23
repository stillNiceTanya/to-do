import TodoList from "./TodoList";
import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPannel";
import ItemStatusFilter from "./ItemStatusFilter";
import React, { Component } from "react";
import Imput from "./ItemAddForm";

class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      { id: 1, label: "Drink Coffee", important: false },
      { id: 2, label: "Smile for life", important: false },
      { id: 3, label: "Do some staff", important: true },
      { id: 4, label: "Do another staff", important: false },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const res = [...before, ...after];

      return {
        todoData: res,
      };
    });
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };
    this.setState(({ todoData }) => {
      const res = [...todoData, newItem];
      return {
        todoData: res,
      };
    });
  };

  render() {
    return (
      <div className="container">
        <AppHeader></AppHeader>
        <SearchPanel></SearchPanel>
        <ItemStatusFilter></ItemStatusFilter>
        <TodoList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
        ></TodoList>
        <Imput onItemAdded={this.addItem}></Imput>
      </div>
    );
  }
}

export default App;
