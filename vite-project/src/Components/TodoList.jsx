import { useState } from "react";
import Todo from "./Todo";
import initialTodos from "../Data/initialTodos";
import maxTodoId from "../Utilits/maxTodoId";

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleChange = (todo) => {
    setTodos(
      todos.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            title: todo.title,
            completed: todo.completed,
          };
        }

        return {
          ...t,
        };
      })
    );
  };

  const handleAdd = (title) => {
    setTodos([
      ...todos,
      {
        id: maxTodoId(todos),
        title: title,
        completed: false,
      },
    ]);
  };

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              key={todo.id}
              todo={todo}
              onChange={handleChange}
              onDelete={handleDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
