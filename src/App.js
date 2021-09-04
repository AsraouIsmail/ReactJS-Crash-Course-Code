/* eslint-disable no-unused-vars */
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from 'react'

function App() {
  // const name = "Asraou Ismail"
  // const x = false

  const [tasks, setTasks] = useState([
    {
        "id":1,
        "text":"Doctors Appointment",
        "day":"Feb 5th at 2:30pm",
        "reminder": true,
    },
    {
        "id":2,
        "text":"Metting at work",
        "day":"Feb 6th at 8:30am",
        "reminder": true,
    },
    {
        "id":3,
        "text":"Food and clothes Shooping",
        "day":"Feb 5th at 4:30pm",
        "reminder": false,
    },
    {
        "id":4,
        "text":"Gym Session",
        "day":"Feb 7th at 9:30am",
        "reminder": true,
    }
])
  return (
    <div className="container">
      {/* <h1>Hello from React JS World</h1>
      <h2>My Name is {name}</h2>
      <p>the value of this logic is {x ? 'YES' : 'No'}</p> */}
      <Header title="Task tracker application"/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
