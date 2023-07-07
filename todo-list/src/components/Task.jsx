
const Task = ({ task , setTodoList, index })=>{

    

function handleDelete(e){
    setTodoList((currList)=>{
        const newList = [...currList]
        newList.splice(index,1);
        return newList
    })
}

function handleCheck(e){
    setTodoList((currList)=>{
        if (currList[index].isDone === false) {
            currList[index].isDone = true
        } else {
            currList[index].isDone = false
        }
        return currList
    })
}

    return <li>{task.task}
        <input type="checkbox" onClick={handleCheck}></input>
        <button onClick={handleDelete}>X</button>
    </li>
}

export default Task;