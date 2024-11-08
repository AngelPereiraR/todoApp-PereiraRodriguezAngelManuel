import { useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialStateTodos = [
  {
    id: 1,
    title: "Tarea 1",
    description: "Descripción 1",
    state: true,
    priority: false,
  },
  {
    id: 2,
    title: "Tarea 2",
    description: "Descripción 2",
    state: true,
    priority: true,
  },
  {
    id: 3,
    title: "Tarea 3",
    description: "Descripción 3",
    state: false,
    priority: false,
  },
];

function App() {
  const [todos, setTodos] = useState(initialStateTodos);
  const [editMode, setEditMode] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState({});

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodoState = (id) => {
    const updatedTodos = todos.map((t) =>
      t.id === id ? { ...t, state: !t.state } : t
    );
    setTodos(updatedTodos);
  };

  const updateTodo = (todo) => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...t, ...todo } : t)));
    setEditMode(false);
    setTodoToEdit({});
  };

  const selectTodoToEdit = (todo) => {
    setEditMode(true);
    setTodoToEdit(todo);
  };

  return (
    <div className="container mb-2">
      <h1 className="my-4">{editMode ? "Editar tarea" : "Añadir tarea"}</h1>
      <Formulario
        addTodo={addTodo}
        editMode={editMode}
        setTodoToEdit={setTodoToEdit}
        updateTodo={updateTodo}
        todoData={todoToEdit}
      />
      <Todos
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodoState={toggleTodoState}
        selectTodoToEdit={selectTodoToEdit}
      />
    </div>
  );
}

export default App;
