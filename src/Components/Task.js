import React from 'react'

const Task = ({ task }) => {
    return (
        <div className="event">
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            
        </div>
    )
}

export default Task
