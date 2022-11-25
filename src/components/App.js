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
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Smile for life"),
      this.createTodoItem("Do some staff"),
    ],
  };
  createTodoItem(label) {
    return {
      label,
      important: false,
      id: this.maxId++,
      done: false,
    };
  }

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

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const importantItem = todoData[idx];
      const newItem = { ...importantItem, important: !importantItem.important };
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };
      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newArray,
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      const res = [...todoData, newItem];
      return {
        todoData: res,
      };
    });
  };

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="container">
        <AppHeader
          toDo={todoCount}
          done={doneCount}
        ></AppHeader>
        <SearchPanel></SearchPanel>
        <ItemStatusFilter></ItemStatusFilter>
        <TodoList
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          todos={todoData}
          onDeleted={this.deleteItem}
        ></TodoList>
        <Imput onItemAdded={this.addItem}></Imput>
      </div>
    );
  }
}

export default App;
