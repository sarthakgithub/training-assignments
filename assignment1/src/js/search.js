import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {IndexRoute} from 'react-router'
import TileList from './tileList.js'
import data from '../json/data.json'

class Search extends  React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="searched">
                {data.shows
                    .filter(show => `${show.title}`.indexOf(this.props.match.params.id) >=0)
                    .map(show => <TileList key={show.id} show={show} />
                )}
            </div>
        )
    }
}

export default Search