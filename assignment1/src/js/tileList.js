import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {IndexRoute} from 'react-router'

class TileList extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return(
			<Link to={`/details/${this.props.show.id}`}>
			<div className="tile">
				<img className="imgTile" alt={`${this.props.show.title}`} src={`/src/images/image${this.props.show.id}.jpg`} />
				<div>
					<h3>{this.props.show.title}</h3>
				</div>
			</div>
			</Link>
		)
	}
}

export default TileList