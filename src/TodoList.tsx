import React, {ChangeEvent, KeyboardEvent, useState} from "react";
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
    let [value, setValue] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const addTask = () => {
        props.addTask(value)
        setValue('')
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask()
        }
    }
    const onClickAllHandler = () => {
        props.changeFilter('all')
    }
    const onClickActiveHandler = () => {
        props.changeFilter('active')
    }
    const onClickCompletedHandler = () => {
        props.changeFilter('completed')
    }

    return (

        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input
                        onChange={(e) => {onChangeInputHandler(e)}}
                        value={value}
                        onKeyPress={onKeyPressHandler}
                    />
                    <button onClick={addTask}>+</button>
                </div>
                <ul>
                    {props.tasks.map((task) => {
                        const onClickRemoveHandler = (task: taskType) => {
                            props.removeTask(task.id)
                        }
                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span> {task.title} </span>
                                <button onClick={() => onClickRemoveHandler(task)}>✖
                                </button>
                            </li>)
                    })}
                </ul>
                <div>
                    <button onClick={onClickAllHandler}>All</button>
                    <button onClick={onClickActiveHandler}>Active</button>
                    <button onClick={onClickCompletedHandler}>Completed</button>
                </div>
            </div>
        </div>
    );
}