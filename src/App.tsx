import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./Components/TodoList";


function App() {


    let [task1, setTask1] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])


    const removeTask = (action: number) => {
        setTask1(task1.filter((el)=> el.id !== action ))
    }


    return (
        <div className="App">
            <TodoList
                title="What to learn"
                tasks={task1}
                removeTask={removeTask}

            />
        </div>
    );
}

export default App;
