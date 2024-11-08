import React, { useState } from "react";
import Swal from "sweetalert2";

const Formulario = ({
  addTodo,
  updateTodo,
  editMode,
  todoData,
  setTodoToEdit,
}) => {
  const initialValue = {
    id: 0,
    title: "",
    description: "",
    state: "pendiente",
    priority: false,
  };

  const [todo, setTodo] = useState(initialValue);

  const { id, title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (!editMode && (!title.trim() || !description.trim())) ||
      (editMode && (!todoData.title.trim() || !todoData.description.trim()))
    ) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Título y descripción son obligatorios",
      });
    }
    Swal.fire({
      title: editMode
        ? "Tarea editada correctamente"
        : "Tarea añadida correctamente",
      icon: "success",
    });
    if (editMode) {
      updateTodo({
        ...todoData,
        state: state === "completada",
      });
    } else {
      addTodo({
        id: Date.now(),
        ...todo,
        state: state === "completada",
      });
      setTodo(initialValue);
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (editMode) {
      setTodoToEdit({
        ...todoData,
        [name]: type === "checkbox" ? checked : value,
      });
    } else {
      setTodo({
        ...todo,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  return (
    <div className="m-2">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Introduce la tarea"
          className="form-control mb-2"
          value={editMode ? todoData.title : title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Introduce la descripción"
          className="form-control mb-2"
          value={editMode ? todoData.description : description}
          onChange={handleChange}
        />
        <select
          name="state"
          className="form-control mb-2"
          value={editMode ? todoData.state : state}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <div className="form-checked mb-2">
          <input
            type="checkbox"
            name="priority"
            id="inputCheck"
            className="form-checked mb-2"
            checked={editMode ? todoData.priority : priority}
            onChange={handleChange}
          />
          <label htmlFor="inputCheck" className="form-checked mx-2 mb-2">
            Prioridad
          </label>
        </div>
        <button
          type="submit"
          className={editMode ? "btn btn-warning" : "btn btn-primary"}
        >
          {editMode ? "Editar" : "Añadir"}
        </button>
      </form>
    </div>
  );
};

export default Formulario;
