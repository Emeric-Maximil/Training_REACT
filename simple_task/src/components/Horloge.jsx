import { useState } from "react";
export function App() {
    const [tasks,setTasks] = useState([
    "Faire mes devoirs",
    "Apprendre à conduire",
    "Faire à manger",
    ]);
    function onAddTask(event){
    event.preventDefault(); // J'annule le rechargement de la page
    const newtask = (new FormData(event.target)).get("task");
    setTasks([
    ...tasks,
    newtask
    ]);
    }
    const tasksElements = tasks.map((task,i)=><li key={i}>{task}</li>);
    return (
    <div>
    <h1>Simple Task</h1>
    <form onSubmit={onAddTask}>
    <input type="text" name="task" />
    <button>Ajouter</button>
    </form>
    <ul>
    { tasksElements }
    </ul>
    </div>
    )
    }
    