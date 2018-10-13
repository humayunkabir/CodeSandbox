import React from "react";
import List from "./List.jsx";

const AllTodos = ({ todos, deleteTodo }) => {
  return (
    <section className="mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <List
              todos={todos.incomplete}
              deleteTodo={deleteTodo}
              title="Things to do"
            />
          </div>
          <div className="col">
            <List todos={todos.complete} title="Accomplish" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllTodos;
