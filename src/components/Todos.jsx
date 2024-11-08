import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, toggleTodoState, selectTodoToEdit }) => {
  return (
    <div className="mt-4">
      <h2 className="text-center">Vista de tareas</h2>
      <ul className="list-group">
        {todos
          .sort((a, b) => {
            if (a.state !== b.state) return a.state - b.state;
            return b.priority - a.priority;
          })
          .map((todo) => (
            <Todo
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodoState={toggleTodoState}
              selectTodoToEdit={selectTodoToEdit}
            />
          ))}
        {todos.length === 0 && (
          <div className=" list-group-item text-center">No hay tareas</div>
        )}
      </ul>
    </div>
  );
};

export default Todos;
