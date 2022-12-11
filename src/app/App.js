import React, { useEffect, useState } from "react"

function App() {
  const [task, setTask] = useState({ _id: "", title: "", description: "", tasks: [] })

  function handleChange(event) {
    setTask({
      ...task,
      [event.target.name]: event.target.value
    })
  }

  function addTask() {
    if(task._id) {
      /* Edit task */
      fetch(`/api/tasks/${task._id}`, {
        method: 'PUT',
        body: JSON.stringify(task),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        alert('Task edited :D')
        setTask({ ...task, _id: '', title: '', description: '' })
        
        fetchTasks()
      })
    } else {
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
        setTask({ ...task, title: '', description: '' })
        
        fetchTasks()
      })
      .catch(err => console.log(err))
    }
  }

  function editTask(id) {
    fetch(`/api/tasks/${id}`)
    .then(res =>res.json())
    .then(data => {
      console.log(data)

      setTask({ ...task, _id: data._id, title: data.title, description: data.description })
    })
  }

  function deleteTask(id) {
    console.log(`Deleting ${id}`)

    if(!confirm('¿Estás seguro de querer eliminarlo?')) return

    fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)

      alert('Task deleted D:')
    })

    fetchTasks()
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

          <button type="submit">{!task._id ? "Agregar" : "Actualizar"}</button>
        </form>
      </section>

      <section>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {
              task.tasks.map(
                task => <tr key={task._id}>
                  <td>
                    {task.title}
                  </td>

                  <td>
                    {task.description}
                  </td>

                  <td>
                    <button onClick={() => editTask(task._id)}>Edit</button>
                    <button onClick={() => deleteTask(task._id)}>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default App
