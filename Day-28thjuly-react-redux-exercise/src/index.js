import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import MainHeader from './mainheader.js'
import MainFooter from './mainfooter.js'
import Home from './home.js'
import AboutUs from './aboutus.js'
import Contact from './contactus.js'
import './App.css';
import {Provider} from 'react-redux'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import  {default as myreducers} from './reducer/statereducer.js'
//import {default as AppCounter} from './AppCounter.js'
import AppCounter from './container/AppCounterContainer'
import {logger,crashReporter} from './middleware/middleware.js'

const reducers = combineReducers({
    state : myreducers
})

const store = createStore(reducers,applyMiddleware(logger,crashReporter));

ReactDOM.render(
    <div>
        <Provider store={store}>
            <AppCounter />
        </Provider>
    </div>,document.getElementById('container')
)

//ReactDOM.render(
//    <div className="MyApp">
//    <MainHeader />
//    <Router>
//    <div className="navBar navbar navbar-default">
//        <ul className="navBarTabLinks">
//            <li className="navLinks"><Link to="/home">Home</Link></li>
//            <li className="navLinks"><Link to="/about">About</Link></li>
//            <li className="navLinks"><Link to="/contact">ContactUs</Link></li>
//        </ul>
//
//        <Route  path="/home" component={Home} />
//        <Route  path="/about" component={AboutUs} />
//        <Route  path="/contact" component={Contact} />
//    </div>
//
//    </Router>
//        <MainFooter />
//        </div>,document.getElementById('container')
//)