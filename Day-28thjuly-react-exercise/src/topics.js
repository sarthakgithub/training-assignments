import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const Topics = ({match}) => (
    <div className="SubmenuTopic">
        <ul>
            <li>
                <Link to={`${match.url}/mytopics`}>My Topics</Link>
            </li>

        </ul>
        <Route exact path={`${match.url}/:query`} component={TopicText}></Route>
    </div>
)

const TopicText = ({match}) => (
    <div>
        <h3>{match.params.query}</h3>
    </div>
)
export default Topics;