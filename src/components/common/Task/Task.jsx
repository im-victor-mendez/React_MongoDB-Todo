import React from 'react'

/**
 * 
 * @param {string} title
 * @param {string} description
 * @returns section.task
 */
function Task({title, description}) {
  return (
    <section data-testid='task' className='task'>
        <h1 data-testid='task-title'>{title}</h1>
        <p data-testid='task-description'>{description}</p>
    </section>
  )
}

export default Task