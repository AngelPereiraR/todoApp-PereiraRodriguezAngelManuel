import React from "react";

const Todo = ({ todo, deleteTodo, toggleTodoState, selectTodoToEdit }) => {
  const { id, title, description, priority, state } = todo;
  return (
    <li className="list-group-item" key={id}>
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h5 className={state ? "completada" : undefined}>{title}</h5>
          <p className={state ? "completada" : undefined}>{description}</p>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-danger mr-2"
              onClick={() => deleteTodo(id)}
            >
              Eliminar
            </button>
            <button
              className="btn btn-sm btn-warning"
              onClick={() => toggleTodoState(id)}
            >
              Actualizar
            </button>
            <button
              className="btn btn-sm btn-primary"
              onClick={() => selectTodoToEdit(todo)}
            >
              Editar
            </button>
          </div>
        </div>

        <span className="badge rounded-pill text-bg-primary">
          {priority && "Prioridad"}
        </span>
      </div>
    </li>
  );
};

export default Todo;
