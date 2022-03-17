import React from 'react'

export default function AddTodo({onSubmit, onChange, title}) {
  return (
    <div>
        <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="title"
                    style={{flex:'10', padding: '5px'}}
                    placeholder="Add todo ..."
                    value={title}
                    onChange={onChange}
                />                
        </form>

    </div>
  )
}
