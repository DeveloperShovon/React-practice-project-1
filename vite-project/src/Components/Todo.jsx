import { useState } from "react";

export default function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);

  const todoContant = isEditing ? (
    <>
      <input type="text" value={todo.title}/>
      <button>Save</button>
    </>
  ) : (
    <>
      {todo.title}
      <button onClick={()=>(setIsEditing(true))}>Edit</button>
    </>
  );

  return (
    <>
      <input type="checkbox" checked= {todo.completed} />
      {todoContant}
      <button>Delete</button>
    </>
  );
}
