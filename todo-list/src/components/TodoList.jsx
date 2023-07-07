import Task from './Task';

const TodoList = ({ todoList, setTodoList })=>{
    return <div>
        <h1>TodoList</h1>

        {todoList.map((task, index)=>{
            return < Task task={task} setTodoList={setTodoList} index={index} key={task.task}/>
        })}
    
    </div>
}

export default TodoList;