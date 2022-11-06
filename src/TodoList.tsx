import React, {ChangeEvent, useState} from "react";
import {filterType} from "./App";
import {log} from "util";

type todoListType = {
    title: string
    tasks: Array<taskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: filterType) => void
    addTask: (value: string) => void
}

type taskType = {
    id: string
    title: string
    isDone: boolean
}

export function TodoList(props: todoListType) {
    let [value, setValue]=useState('')
    const onChangeInputHandler=(e: ChangeEvent<HTMLInputElement>)=> {
        setValue(e.currentTarget.value)
    }
    const addTask=()=> {
        props.addTask(value)
        setValue('')
    }
    return (

        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input onChange={(e)=>{onChangeInputHandler(e)}} value={value}/>
                    <button onClick={addTask}>+</button>
                </div>
                <ul>
                    {props.tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span> {task.title} </span>
                                <button onClick={() => {
                                    props.removeTask(task.id)
                                }}>✖
                                </button>
                            </li>)
                    })}
                </ul>
                <div>
                    <button onClick={() => props.changeFilter('all')}>All</button>
                    <button onClick={() => props.changeFilter('active')}>Active</button>
                    <button onClick={() => props.changeFilter('completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
}