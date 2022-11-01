import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./TodoList";

const App=()=> {
    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ])

    const removeTask=(id: number)=>{
        tasks = tasks.filter(t=>t.id!==id)
        setTasks(tasks)
    }


    return (
        <div className={'App'}>
            <TodoList
                title={'What to learn'}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    )

}

export default App;

