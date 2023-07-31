import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faBoxOpen, faCheckSquare, faClipboard, faClipboardCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo=({task,deletetodo,addCompleteTodo})=>{
    return(
        <div className='Todo'>
            <p>{task.value}</p>
            <div style={{display: "flex",alignItems: "center"}}>
                {addCompleteTodo!=="0"?<FontAwesomeIcon icon={faClipboard} onClick={()=>{addCompleteTodo(task.idno)}}></FontAwesomeIcon>:<FontAwesomeIcon icon={faClipboardCheck}></FontAwesomeIcon>}
                <FontAwesomeIcon icon={faTrash} onClick={()=>{deletetodo(task.idno)}}></FontAwesomeIcon>
            </div>
        </div>
    )
}