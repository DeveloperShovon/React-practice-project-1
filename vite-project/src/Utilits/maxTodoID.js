 function maxTodoId(todos){
    if (todos.id===0){
        return 1
    }

    const maxId = todos.reduce((maxid, todoid) => {
        Math.max(maxid , todoid)
    }, 0)

    return maxId + 1

}

export default maxTodoId;