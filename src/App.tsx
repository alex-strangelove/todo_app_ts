import { useState } from "react";

import "./App.css";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  // const todos = [new Todo("TypeScript"), new Todo("React")];
  const [todos, setTodos] = useState<Todo[]>([]);


  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    console.log('is triggered!');
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos onRemoveTodo={removeTodoHandler} items={todos} />
    </div>
  );
}

export default App;
