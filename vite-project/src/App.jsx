
import { useState } from 'react';
import AddTodos from './Components/AddTodos.jsx'
import TodoList from './Components/TodoList.jsx'
import initialTodos from './Data/initialTodos.js';
import maxTodoId from './Utilits/maxTodoID.js';

function App() {
const [todos, setTodos] = useState(initialTodos);

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
    console.log(id);
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
     console.log(todo);
  };

  const handleAdd = (title) => {
    console.log(title);
    setTodos([
      ...todos,
      {
        id: maxTodoId(todos),
        title: title,
        completed: true,
      },
    ]);
    console.log(maxTodoId(todos));
  };

  return (
    <>
       <AddTodos onAdd={handleAdd} />
      <TodoList todos={todos} onChange={handleChange} onDelete={handleDelete} />
    </>

  )
}

export default App
