import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Goal: React todod application
  // const tasks = ["Reading Books", "Playing guitar", "Writing Codes", "Watching Movie"]
  const [tasks, setTasks] = useState(["Reading Books", "Playing guitar", "Writing Codes", "Watching Movie"])

  const [newTaskName, setNewTaskName] = useState();
  

  const onAddNewTask = () => {
    let tasksList = [...tasks];
    tasksList.push(newTaskName);

    setTasks(tasksList)
  }

  const onRemove = (taskIndex) => {
   let tasksList = [...tasks];
   tasksList.splice(taskIndex, 1);
   setTasks(tasksList)
  }


  return (
    <div className='container'>
      <div className='sub-container'>
      <h1>Todo Application</h1>

      <div className='form-container'>
        <input type="text" placeholder='Activity' onChange={(event) => setNewTaskName(event.target.value)} />
        <button  onClick={onAddNewTask}>ADD</button>
      </div>

      <div className='list-container'>
        <h2>Activities</h2>

        <div>
          {tasks.map((task, index) => (
            <div key={index} className='task'>
              <label>{index+1} {task}</label>
              <button style={{backgroundColor: "red"}} onClick={() => onRemove(index)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
