import React, {useState} from 'react';

type PropsType = {
    title: string
    tasks: TaskType[]
    removeTask: (action: number)=>void

}

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export const TodoList = (props: PropsType) => {

    let [filterValue, setFilterValue] = useState('All')

    const filterTask = (buttonName: string) => {
        setFilterValue(buttonName)
    }

    let FilteredTasks = props.tasks;
    if (filterValue === 'Active') {
        FilteredTasks = props.tasks.filter(el => !el.isDone)
    }
    if (filterValue === 'Completed') {
        FilteredTasks = props.tasks.filter(el => el.isDone)
    }



    const TasksMap = FilteredTasks.map((el )=> {
        return(
            <li key={el.id}>
                <button onClick={()=>props.removeTask(el.id)}>x</button>
                <input type="checkbox" checked={el.isDone}/>
                <span>{el.title}</span>
            </li>
        )
    })

    return (
        <div>
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    {TasksMap}
                </ul>
                <div>
                    <button onClick={()=>filterTask('All')}>All</button>
                    <button onClick={()=>filterTask('Active')}>Active</button>
                    <button onClick={()=>filterTask('Completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
};

