import React, { useState } from "react";

function App() {
  const [popupActive, setPopupActive] =useState(false);
  const [newTodo, setNewTodo]=useState("");

  const [tasks, setTasks] = useState([
    {
      text: "eat breakfast",
      completed: false,
    },
    {
      text: "Take a shower",
      completed: false,
    },
    {
      text: "Do homeworks",
      completed: false,
    },
    {
      text: "Eat lunch",
      completed: false,
    },
    {
      text: "Take a nap",
      completed: false,
    },
  ]);

  const handleCheckboxClick = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDeleteClick = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTask = {
        text: newTodo,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setNewTodo("");
      setPopupActive(false);
    }
  };

  return (
    <div className="App">
    <h1>To do Application</h1>
    <h4>Your tasks for today:</h4>

    <div className="todos">
      {tasks.map((task, index) => (
        <div className={`todo ${task.completed ? "is-complete" : ""}`} key={index}>
          <div className="checkbox" onClick={() => handleCheckboxClick(index)}></div>
          <div className={`text ${task.completed ? "completed" : ""}`}>{task.text}</div>
          <div className="delete-todo" onClick={() => handleDeleteClick(index)}>x</div>
        </div>
      ))}
    </div>
      
    <div className="addPopup" onClick={()=> setPopupActive(true)}>+</div>

{popupActive ? (
     <div className="popup">  
      <div className="closePopup" onClick={()=> setPopupActive(false)}>x</div>
      <div className="content">
        <h4>Add task</h4>
       
        <input
         type="text"
          className="add-todo-input" 
          onChange={e=> setNewTodo(e.target.value)}
          value={newTodo} />
          <div className="button" onClick={addTodo}>Create Task</div>
      </div>
     </div> 
) : ''}
  </div>
);}
export default App;
