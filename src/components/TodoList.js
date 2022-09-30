import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
    todos,
    changeTodo,
    removeTodo
}) => (
    <div className="container">
        <ul className="todos">
            {todos.map(todo =>
                <li dataid={todo.id} key={todo.id}>
                    <span style={{
                        textDecoration: todo.completed ? "line-through" : "none",
                    }}>{todo.id}.<span className="space">{todo.title}</span></span>
                    <TodoItem {...todo} removeTodo={removeTodo} changeTodo={changeTodo} />
                </li>)}
        </ul>
    </div >
)


// function ListTodos({ todos }) {
//     return (
//         <div className="container">
//             <ul className="todos">
//                 {todos.map(todo => <li dataid={todo.id} key={todo.id}>
//                     <span style={{
//                         textDecoration: todo.completed ? "line-through" : "none",
//                     }}>{todo.title}</span>
//                     <span><button id={todo.id} todo-title={todo.title} onClick={this.changeTodo}><i className="fa-solid fa-check"></i></button>
//                         <button id={todo.id} ><i className="fa-solid fa-xmark"></i></button></span>
//                 </li>)}
//             </ul>
//         </div >
//     );
// }



// onClick={() => changeTodo(todo.id, todo.title)}


export default TodoList;