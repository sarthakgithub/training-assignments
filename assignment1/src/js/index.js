import React from 'react'
import {render} from 'react-dom'
import '../css/module1.css';
import App from './module1.js';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {IndexRoute} from 'react-router'
import TileList from './tileList.js'
import Search from './search.js'
import Detail from './details.js'
render(
	<Router>
    <div className="navBar">
        <ul className="navBarTabLinks">
            <li className="navLinks" ><Link to="/">Home</Link></li>
            <li className="navLinks" ><Link to="/search">Search</Link></li>
            <li className="navLinks" ><Link to="/details">Details</Link></li>
        </ul>

        <Route  exact path="/" component={Search}/>
        <Route  path="/search" />
        <Route  path="/details" component={Detail}/>
    </div>

    </Router>,document.getElementById('container'));