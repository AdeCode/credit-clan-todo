import React from 'react'

export default function Card({title,deleteTask,markComplete,status}) {
  return (
    <div className='card'>
        <input 
            type="checkbox" 
            checked={!status} 
            onChange={markComplete}
        />
        <span className={status===false ? 'completed' : ''}>{title}</span>
        <button onClick={() => deleteTask()}>Delete</button>
    </div>
  )
}
