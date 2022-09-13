import React from 'react'

const Form = () => {
  return (
    <form onSubmit={handleSubmit}>
          <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} />
          <button type="submit">{editId ? "edit" : "Go"}</button>
        </form>

  )
}

export default Form