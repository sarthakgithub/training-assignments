import React from 'react'

export class ToDoAppList extends React.Component{
	constructor(props){
		super(props);
		this.remove = this.remove.bind(this);
	}
	remove(e){
		let parentElement = e.target.parentNode.querySelector('span').innerText;
		this.props.remove(parentElement);
	}
	render(){
		var items = this.props.apptasks.map((elem,index) => {
				return <li key={index}><span>{elem}</span><button onClick={this.remove}>X</button></li>
		})
		return(
			<ul>{items}</ul>
		)
	}
}