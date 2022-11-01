import React from "react";

type todoListType={
    title: string
    tasks: Array<taskType>
}

type taskType={
    id: number
    title: string
    isDone: boolean
}

export function TodoList(props: todoListType) {
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>*/}
                    {/*<li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>*/}
                    {/*<li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}

                    {props.tasks.map((task)=> {
                        return(
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isDone}/>
                            <span> {task.title} </span>
                        </li>)
                    })}
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}