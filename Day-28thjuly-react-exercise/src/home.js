import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const Home = ({match}) => (
    <div className="SubmenuHome">
        <ul>
            <li>
                <Link to={`${match.url}/myhome`}>My Home</Link>
            </li>

        </ul>
        <Route exact path={`${match.url}/:query`} component={HomeText}></Route>
    </div>
)

const HomeText = ({match}) => (
    <div>
        <h3>{match.params.query}</h3>
    </div>
)
export default Home;