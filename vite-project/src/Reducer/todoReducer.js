import maxTodoId from "../Utilits/maxTodoID";

export default function todoReducer(todos, action) {
    switch (action.type) {
        case 'add':
            return [
      ...todos,
      {
        id: maxTodoId(todos),
        title: action.title,
        completed: false,
      },
    ]

        case 'change':
            return todos.map((t) => {
        if (t.id === action.todo.id) {
          return {
            ...t,
            title: action.todo.title,
            completed: action.todo.completed,            
          };          
        }
        
        return {
          ...t,
        };
       })

      case 'delete':
        return todos.filter((t) => t.id !== action.id);

}
               
}