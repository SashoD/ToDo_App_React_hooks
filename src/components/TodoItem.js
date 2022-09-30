import React from "react"

const TodoItem = ({
    id,
    title,
    changeTodo,
    removeTodo
}) => (
    <span className="buttons"><button id={id} todo-title={title}
        onClick={() => { changeTodo(id) }}><i className="fa-solid fa-check"></i></button>
        <button key={id} className="space"
            onClick={() => { removeTodo(id) }}><i className="fa-solid fa-xmark"></i></button></span >
);

export default TodoItem