import React from "react";

const List = ({ todos, deleteTodo, title }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        {todos && todos.length ? (
          <ol>
            {todos.map(todo => (
              <li
                key={todo.id}
                onClick={() => deleteTodo && deleteTodo(todo.id)}
                className={deleteTodo ? "text-success" : "text-muted"}
              >
                {deleteTodo ? todo.content : <del>{todo.content}</del>}
              </li>
            ))}
          </ol>
        ) : (
          <p>Nothing is here</p>
        )}
      </div>
    </div>
  );
};

export default List;
