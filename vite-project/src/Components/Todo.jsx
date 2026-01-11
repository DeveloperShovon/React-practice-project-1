import { useState } from "react";

export default function Todo({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  const todoContant = isEditing ? (
    <>
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          onChange({
            ...todo,
            title: e.target.value,
            completed: todo.completed,
          })
        }
      />
      <button>Save</button>
    </>
  ) : (
    <>
      {todo.title}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );

  return (
    <>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e)=>{
          onChange({
            id: todo.id,
            title: todo.title,
            completed: e.target.checked
          })
          
        }}
      />
      {todoContant}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </>
  );
}
