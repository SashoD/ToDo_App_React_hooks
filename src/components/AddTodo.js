import React, { useState } from 'react';


const AddTodo = ({ addTodo }) => {
    const [value, setValue] = useState("");

    return (
        <form>
            <input type="text"
                autoFocus
                placeholder="add new todo ..."
                value={value}
                onChange={(e) => { setValue(e.target.value) }} />
            <button
                className="btn"
                id='btn'
                onClick={(e) => {
                    addTodo(value)
                    setValue("")
                }}
                type="button">Add</button>
        </form>
    );
}



export default AddTodo;

