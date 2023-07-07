import { useState } from 'react';


const AddTask = ({ todoList, setTodoList })=>{
    const [ newTask, setNewTask ] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        setTodoList((currList)=>{
            const newTaskObj = {task: newTask, isDone: false}
            return [...currList, newTaskObj]
        })
        setNewTask('')
    }


    return <form onSubmit={handleSubmit}>
        <label htmlFor="taskinput">add task: </label>
        <input id="taskinput" value={newTask} onChange={(e)=>{setNewTask(e.target.value)}}></input>
        <button>+</button>

    </form>
}

export default AddTask;