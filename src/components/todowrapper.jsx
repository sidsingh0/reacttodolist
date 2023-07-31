import React, { useState } from "react";
import { TodoForm } from "./todoform";
import { Todo } from "./todo";
import {v4 as uuidv4} from 'uuid'
uuidv4();

export const TodoWrapper=()=>{
    const [todolist,setTodolist]=useState([])
    const [completelist,setCompletelist]=useState([])
    
    const addTodo=(value)=>{
        setTodolist([...todolist,{value:value,completed:false,idno:uuidv4()}])
    }
    const deleteTodo=(idno)=>{
        const updatedlist=todolist.filter((element)=>element.idno!==idno);
        setTodolist(updatedlist);
    }
    const addCompleteTodo=(idno)=>{
        const newelement=todolist.filter((element)=>element.idno===idno)
        console.log(newelement[0].value)
        setCompletelist([...completelist,newelement[0]])
        deleteTodo(idno)
    }
    const deleteCompleteTodo=(idno)=>{
       const updatedlist=completelist.filter((element)=>element.idno!==idno)
       setCompletelist(updatedlist)
    }

    return(
        <div className='TodoWrapper'>
            <h1>To-do List</h1>
            <TodoForm addTodo={addTodo}/>
            {todolist.map((todo,index)=>(<Todo task={todo} key={index} addCompleteTodo={addCompleteTodo} deletetodo={deleteTodo}/>))}
            {completelist.length>0?<h1>Completed Tasks</h1>:""}
            {completelist.map((completedtodo,index)=>(<Todo task={completedtodo} key={index} addCompleteTodo="0" deletetodo={deleteCompleteTodo}/>))}
        </div>
    )
}