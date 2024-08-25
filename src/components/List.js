import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id: uuidv4(),
        title: "todo1",
        desc: "todo1 description 1"
    },
    {
        id: uuidv4(),
        title: "todo2",
        desc: "todo2 description 2"
    },
    {
        id: uuidv4(),
        title: "todo3",
        desc: "todo3 description 3"
    }
]


const List = () => {
    return (
        <div>
            {todos.map((todo) => {
                return (
                    <div key={todo.id}>
                        <h3>{todo.title}</h3>
                        <p>{todo.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}



export default List;