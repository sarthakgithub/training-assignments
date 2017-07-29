import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main'

let tasksList = ["1","2","3"];

let tasks = localStorage.getItem("storedTasks");
if(tasks){
	tasksList = JSON.parse(tasks);
}
ReactDOM.render(
    <Todo tasks={tasksList}/>,document.getElementById('firstapp')
)