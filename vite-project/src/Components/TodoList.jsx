import { useState } from "react";
import Todo from "./Todo";
import initialTodos from "../Data/initialTodos";

export default function TodoList () {
    const [todos, setTodos] = useState(initialTodos)
    return (
        <>
             <ul>
               {
                 todos.map((todo) =>
                    <li><Todo key={todo.id} todo={todo} /></li>
                )
               }
            </ul>
        </>
    )

    }