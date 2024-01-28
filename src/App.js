import { useState } from 'react'
import { Header } from './components/Header'
import { AddTask } from './components/AddTask'
import { ShowTask } from './components/ShowTask'
import './App.css'
function App() {
  const [taskList, setTasklist] = useState([])
  const [task, setTask] = useState({})
  return (
    <div className='jb'>
      <Header />
      <AddTask
        taskList={taskList}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />

      <ShowTask
        taskList={taskList}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  )
}

export default App
