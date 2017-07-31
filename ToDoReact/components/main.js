import React from 'react'
import {AddNewTask} from './addtask'
import {ToDoAppList} from './addlist'

export class Todo extends React.Component{
	constructor(props){
		super(props);
		this.state = {tasks : this.props.tasks};
		this.updateList  =this.updateList.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.updateLocalStorage = this.updateLocalStorage.bind(this);
	}

	updateList(taskValue){
		let updatedTasks = this.state.tasks;
		updatedTasks.push(taskValue);
		this.setState({
			tasks : updatedTasks
		})
		this.updateLocalStorage(updatedTasks);
	}

	removeItem(taskValue){
		let updatedTasks = this.state.tasks;
		updatedTasks.splice(updatedTasks.indexOf(taskValue),1);
		this.setState({
			tasks : updatedTasks
		})
		this.updateLocalStorage(updatedTasks);
	}

	updateLocalStorage(updatedTasks){
		localStorage.setItem('storedTasks',JSON.stringify(updatedTasks));
	}

	render(){
		return(
			<div>
				<h1>To Do App </h1>
				<AddNewTask updateList={this.updateList} />
				<ToDoAppList apptasks={this.state.tasks} remove={this.removeItem}/>
			</div>
		)
	}
}