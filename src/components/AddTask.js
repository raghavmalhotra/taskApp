export const AddTask = ({ taskList, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    if (task.id) {
      const date = new Date()
      const UpdateTask = taskList.map((todo) =>
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()} | ${date.toLocaleDateString()}`,
            }
          : todo
      )

      setTasklist(UpdateTask)
      setTask({})
    } else {
      const date = new Date()
      const newTask = {
        id: date.getTime(),
        name: e.target.firstChild.value,
        time: ` ${date.toLocaleTimeString()} | ${date.toDateString()}`,
      }
      setTasklist([...taskList, newTask])
      setTask({})
    }
  }

  return (
    <section className='addTask'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          autoComplete='off'
          placeholder='addTask'
          maxLength='25'
          value={task.name || ''}
          onChange={(e) => {
            setTask({ ...task, name: e.target.value })
          }}
        />
        <button type='submit'>{task.id ? 'Update' : 'add task'}</button>
      </form>
    </section>
  )
}
