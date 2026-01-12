
import Todo from "./Todo";
import initialTodos from "../Data/initialTodos";
import maxTodoId from "../Utilits/maxTodoId";

export default function TodoList({ todos, onChange, onDelete }) {
  

  

  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Todo
              key={todo.id}
              todo={todo}
              onChange={onChange}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
