import React from 'react'

const Tasks = ({cur , handleDelete,handleEdit}) => {
  return (
    <li key={cur.id} className="list">
                <span>{cur.toDo}</span>

                <div className='button__container'>
                  <button onClick={() => handleEdit(cur.id)}>Edit</button>
                  <button onClick={() => handleDelete(cur.id)}>Delete</button>

                </div>
              </li>
  )
}

export default Tasks