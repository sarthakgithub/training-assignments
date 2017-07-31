import React from 'react'

export class AddNewTask extends React.Component{
	constructor(){
		super();
		this.justSubmitted = this.justSubmitted.bind(this);
	}

	justSubmitted(e){
		e.preventDefault();
		let text = e.target.querySelector('input');
		let inputValue = text.value;
		text.value = '';
		this.props.updateList(inputValue);
	}		

	render(){
		return(
			<form onSubmit={this.justSubmitted}>
				<input type="text" />
			</form>
		)
	}
}
