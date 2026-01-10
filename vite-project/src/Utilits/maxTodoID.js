export default function maxTodoId(todos){
    if (todos.id===0){
        return 1
    }

    const maxid = todos.reduce((maxid, todoid) => {
        Math.max(maxid , todoid)
    }, 0)

    return maxid + 1

}