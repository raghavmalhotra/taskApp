export const ShowTask = ({ taskList, setTasklist, task, setTask }) => {
  const handleDelete = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id)
    setTasklist(newTaskList)
  }

  const handleEdit = (id) => {
    const selectedTask = taskList.find((task) => task.id === id)
    setTask(selectedTask)
  }

  return (
    <section className='showTask'>
      <div className='head'>
        <div>
          <span className='title'>Todo L\st</span>
          <span className='count'>{taskList.length}</span>
        </div>
        <button className='clearAll' onClick={() => setTasklist([])}>
          clear all
        </button>
      </div>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <p>
              <span className='name'>{task.name}</span>
              <span className='time'>
                {' '}
                <i>{task.time}</i>
              </span>
            </p>
            <i
              onClick={() => handleEdit(task.id)}
              className='bi bi-pencil-square'
            ></i>
            <i
              onClick={() => handleDelete(task.id)}
              className='bi bi-trash'
            ></i>
          </li>
        ))}
      </ul>
    </section>
  )
}
