/* eslint-disable no-unused-vars */
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddTak from "./Components/AddTak";
import Footer from "./Components/Footer";
import About from "./Components/About";

function App() {
  // const name = "Asraou Ismail"
  // const x = false
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  //useEffect to fetch data
  useEffect(() =>{
    const getTasks = async () => {
      const tasksFromServer =  await fetchTasks()
      setTasks(tasksFromServer)
    }
      
    getTasks()
  }, [])

  //Fetch Tasks
      const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()
      return data
    }

    //Fetch a unique Task
     const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()
      return data
    }

//Delete Task
const deleteTask = async (id) => {
  //delete data from the server
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })
  setTasks(tasks.filter((task) => task.id !== id))
}
//Toggle reminder
const toggleReminder = async (id) =>{
  const taskToggle =  await fetchTask(id)
  const upTask = {...taskToggle, reminder: !taskToggle.reminder}
  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(upTask),
  })
  const data = await res.json()
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
}
//Add Task
const addTask = async (task) => {

  const res = await fetch('http://localhost:5000/tasks',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(task),
  })
  const data = await res.json()
  setTasks([...task, data])
  // const id = Math.floor(Math.random() * 100) + 1;
  // const newTask = {id, ...task}

  // setTasks([...tasks, newTask])

}
  return (
    <Router>
      <div className="container">
      {/* <h1>Hello from React JS World</h1>
      <h2>My Name is {name}</h2>
      <p>the value of this logic is {x ? 'YES' : 'No'}</p> */}
      <Header title="Task tracker application" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     
      <Route path='/' exact render={(props) =>(
        <>
           {showAddTask && <AddTak onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ('No Tasks to display')}
        </>
      )} />
      <Route path='/about' component={About}/>
      <Footer />
      <About />

    </div>

    </Router>
    
  );
}

export default App;
