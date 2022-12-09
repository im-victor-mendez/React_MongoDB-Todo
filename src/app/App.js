import React, { useEffect, useState } from "react"

function App() {
  const [task, setTask] = useState({ title: "", description: "", tasks: [] })

  function handleChange(event) {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }

  function addTask() {
    fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      console.log(task)

      alert('Task added :D')
      setTask({ title: '', description: '' })
    })
    .catch(err => console.log(err))
  }

  function fetchTasks() {
    fetch('/api/tasks')
    .then(res => res.json())
    .then(
      data => {
        console.log(data)
        setTask({ tasks: data })
        console.log(task.tasks)
      }
    )
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="App">
      <section className="card">
        <form
        onSubmit={
          event => {
            event.preventDefault()

            addTask(event)
          }
        }
        >
          <label>
            <p>Title</p>
            <input type='text' name="title" onChange={handleChange} value={task.title} />
          </label>

          <label>
            <p>Description</p>
            <textarea name="description" onChange={handleChange} value={task.description}></textarea>
          </label>

          <button type="submit">Agregar</button>
        </form>
      </section>
    </div>
  )
}

export default App
