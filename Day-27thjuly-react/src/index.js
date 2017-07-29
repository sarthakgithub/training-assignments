import React from "react"
import ReactDOM from "react-dom"
import Page from './app.js'
import {Data} from './app.js'
import {Topics} from './app.js'
import Myref from './app.js'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
//ReactDOM.render(
//    <div>
//        <div>hello</div><Page />
//    </div>,document.getElementById('container')
//)

//ReactDOM.render(
//    <Router>
//    <div>
//        <ul>
//            <li><Link to="/">data</Link></li>
//            <li><Link to="/about">page</Link></li>
//            <li><Link to="/topics">topics</Link></li>
//        </ul>
//
//        <Route exact path="/" component={Data} />
//        <Route path="/about" component={Page} />
//        <Route path="/topics" component={Topics} />
//    </div>
//
//    </Router>,document.getElementById('container')
//)

ReactDOM.render(
    <div>
        <div>hello</div><Myref />
    </div>,document.getElementById('container')
)