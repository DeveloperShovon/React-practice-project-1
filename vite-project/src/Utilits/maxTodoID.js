 
 
 function maxTodoId(todos){
    if (todos.length === 0){
        return 1
    }

    const maxId = todos.reduce((maxid, todo) => {
       return Math.max(maxid , todo.id)
    }, 0)

    return maxId + 1

}

export default maxTodoId;