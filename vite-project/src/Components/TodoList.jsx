
import Todo from "./Todo";



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
