import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import AddTodo from "./components/AddTodo.jsx";
import AllTodos from "./components/AllTodos.jsx";

export class App extends Component {
  state = {
    complete: [],
    incomplete: []
  };
  addTodo = content => {
    const todo = { id: Math.random(), content };
    const incomplete = [...this.state.incomplete, todo];
    this.setState({ incomplete });
  };
  deleteTodo = id => {
    const incomplete = this.state.incomplete.filter(todo => todo.id !== id);
    let item = this.state.incomplete.find(todo => todo.id === id);
    item.id = Math.random();
    const complete = [...this.state.complete, item];
    this.setState({ complete, incomplete });
  };
  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo} />
        <AllTodos todos={this.state} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
