import { useState } from "react";

export default function AppTodo({ onAdd }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <h1>Simple Todo Application</h1>
      <input
        type="text"
        placeholder="Add Task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => {
        onAdd(title)
        setTitle('')
        
      } }>Add</button>
    </>
  );
}
