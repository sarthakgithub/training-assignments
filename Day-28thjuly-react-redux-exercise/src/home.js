import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const Home = ({match}) => (
    <div className="SubmenuHome">
        <ul>
            <li>
                <Link to={`${match.url}/counter`}>Counter</Link>
            </li>

        </ul>
        <Route exact path={`${match.url}/:query`} component={Counter}></Route>
    </div>
)

export default Home;

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = { count: 0 };
        this.increament = this.increament.bind(this);
        this.decreament = this.decreament.bind(this);
    }

    increament () {
        this.setState(function(prevState, props) {
            return {
                count: prevState.count + 1
            };
        });
    }

    decreament () {
        this.setState(function(prevState, props) {
            return {
                count: prevState.count - 1
            };
        });
    }

    render(){
        return(
            <div className="Counter">
                <input type="button" value={this.state.count}/>
                <button onClick = {this.increament}> Add 1 </button>
                <button onClick = {this.decreament}> Minus 1 </button>
            </div>
        )
    }
}