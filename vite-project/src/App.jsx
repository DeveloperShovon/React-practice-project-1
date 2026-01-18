
import { useReducer } from 'react';
import AddTodos from './Components/AddTodos.jsx'
import TodoList from './Components/TodoList.jsx'
import initialTodos from './Data/initialTodos.js';
import todoReducer from './Reducer/todoReducer.js';

function App() {
const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  const handleDelete = (id) => {
    dispatch({ type: 'delete', id });
  };

  const handleChange = (todo) => {
    dispatch({ type: 'change', todo });
    
  };

  const handleAdd = (title) => {
    dispatch({ type: 'add', title });
   
  };

  return (
    <>
       <AddTodos onAdd={handleAdd} />
      <TodoList todos={todos} onChange={handleChange} onDelete={handleDelete} />
    </>

  )
}

export default App
