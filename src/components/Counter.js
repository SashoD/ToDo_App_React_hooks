import React from "react"

const Counter = ({ todos }) => (
    <div className="total-todo">
        Total Tasks:<span className="space">{todos.length}</span>
    </div>
)

export default Counter