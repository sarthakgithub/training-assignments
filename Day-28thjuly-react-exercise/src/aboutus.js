import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const AboutUs = ({match}) => (
    <div className="SubmenuAbout">
        <ul>
            <li>
                <Link to={`${match.url}/aboutus`}>About Us</Link>
            </li>

        </ul>
        <Route exact path={`${match.url}/:query`} component={AboutUsText}></Route>
    </div>
)

const AboutUsText = ({match}) => (
    <div>
        <h3>{match.params.query}</h3>
    </div>
)
export default AboutUs;