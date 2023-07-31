import React,{useState} from "react";

export const TodoForm=({addTodo})=>{
    const [value,setValue]=useState("")
    const [isValueTooLong, setIsValueTooLong] = useState(false);
    const submitHandler=(e)=>{
        e.preventDefault()
        addTodo(value)
        setValue("")
    }
    const inputClassName = `todo-input ${isValueTooLong ? "red-tb" : ""}`;
    return(
        <form className='TodoForm' onSubmit={submitHandler}>
            <input 
            className={inputClassName} 
            placeholder='What is the Task today?'
            type="text"
            onChange={(e)=>{
                setValue(e.target.value)
                setIsValueTooLong(e.target.value.length > 10);
            }}
            value={value}
            ></input>
            <button className="todo-btn">Add Task</button>
        </form>
    )
}