import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
