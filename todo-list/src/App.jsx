import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import AddTask from './components/AddTask'

function App() {
  const [ todoList, setTodoList ] = useState([{task: 'eat cheese', isDone: false}, {task: 'build empire', isDone: false},{task: 'fly plane', isDone: false}])



  return <>
    < Header />
    < TodoList todoList={todoList} setTodoList={setTodoList}/>
    < AddTask todoList={todoList} setTodoList={setTodoList}/>
  </>
}

export default App
