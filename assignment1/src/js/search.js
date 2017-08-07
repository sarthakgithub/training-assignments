import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {IndexRoute} from 'react-router'
import TileList from './tileList.js'
import data from '../json/data.json'

class Search extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			searchTerm : ''
		}	
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
		this.showAllTiles = this.showAllTiles.bind(this);
	}
	handleSearchTermChange(event){
		this.setState({
			searchTerm : event.target.value
		})
	}
	showAllTiles(event){
		this.setState({
			searchTerm : ''
		})
	}
	render(){
		return(
			<div>
				<div className="searchBox">
					<input type="text" placeholder="search" value={this.state.searchTerm} 
					onChange={this.handleSearchTermChange} className="search form-control"/>
					{this.state.searchTerm ? 
						<span onClick={this.showAllTiles} 
						className="glyphicon glyphicon-remove"></span> : ''
					}
				</div>	
				{data.shows
					.filter(show => `${show.title}`.indexOf(this.state.searchTerm) >=0)
					.map(show => <TileList key={show.id} show={show} />		
				)}
			</div>
		)
	}
}

export default Search