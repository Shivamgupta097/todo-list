
import { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import TaskList from './components/TaskList';



const getLocalTasks = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
}

function App() {
  const [toDo, setToDo] = useState("");
  const [tasks, setTasks] = useState(getLocalTasks());
  const [editId, setEditId] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(tasks))
  }, [tasks])


  const handleSubmit = (e) => {
    e.preventDefault();
    //  To edit the click list
    if (editId) {
      const updatedTasks = tasks.map((cur) => cur.id === editId ? { id: cur.id, toDo } : cur);
      console.log(updatedTasks, "updated task");
      console.log(tasks, "1 task");

      setTasks(updatedTasks);


      //setEditId
      setEditId(editId);
      setIsEdit(false);
      setToDo("");
      return;
    }

    if (toDo !== "") {
      setTasks([{ id: uuid(), toDo }, ...tasks]);
      setToDo("");

    }
  }

  //To delete the click link

  const handleDelete = (id) => {
    const updatedList = tasks.filter((cur) => cur.id !== id);
    setTasks(updatedList);
  }

  //to edit the click list
  const handleEdit = (id) => {
    const editObj = tasks.find(cur => cur.id === id);
    setToDo(editObj.toDo);
    setEditId(id);
    setIsEdit(true);
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>To-do list App 📝</h1>
        {/* input form start */}
        <form onSubmit={handleSubmit}>
          <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} />
          <button type="submit">{isEdit ? "Edit" : "Done"}</button>
        </form>
        {/* TaskList start */}
        <TaskList tasks={tasks} handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>

    </div>
  );
}

export default App;
