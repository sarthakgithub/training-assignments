import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
//import MainHeader from './mainheader.js'
import MainFooter from './mainfooter.js'
import Home from './home.js'
import AboutUs from './aboutus.js'
import Topics from './topics.js'
import logo from './logo.svg';
import './App.css';

ReactDOM.render(
    <div className="MyApp">
        <img src={logo} className="AppLogo" alt="logo" />

    <Router>
    <div className="navBar">
        <ul className="navBarTabLinks">
            <li className="navLinks"><Link to="/base">Home</Link></li>
            <li className="navLinks"><Link to="/about">About</Link></li>
            <li className="navLinks"><Link to="/topics">Topics</Link></li>
        </ul>

        <Route  path="/base" component={Home} />
        <Route  path="/about" component={AboutUs} />
        <Route  path="/topics" component={Topics} />
    </div>

    </Router>
        <MainFooter />
        </div>,document.getElementById('container')
)