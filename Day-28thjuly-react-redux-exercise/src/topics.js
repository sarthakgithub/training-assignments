import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

const Topics = ({match}) => (
    <div className="SubmenuTopic">
        <ul>
            <li>
                <Link to={`${match.url}/contactus`}>Contact us</Link>
            </li>

        </ul>
        <Route exact path={`${match.url}/:query`} component={ContactUs}></Route>
    </div>
)

export default Topics;

class ContactUs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value1: '',value2 : ''};

        this.handleChangeFirst = this.handleChangeFirst.bind(this);
        this.handleChangeSecond = this.handleChangeSecond.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeFirst(event) {
        this.setState({value1: event.target.value});
    }

    handleChangeSecond(event) {
        this.setState({value2: event.target.value});
    }

    handleSubmit(event) {
        alert(' FirstName: ' + this.state.value1 + ' LastName : ' + this.state.value2);
        event.preventDefault();
    }

    render() {
        return (
            <form className="ContactUs" onSubmit={this.handleSubmit}>
                <label>Firstname</label>
                <input type="text" name="firstname"  className="form-control" value={this.state.value1} onChange={this.handleChangeFirst} />
                <label >Lastname</label>
                <input type="text" name="lastname"  className="form-control" value={this.state.value2} onChange={this.handleChangeSecond}/>
                <input type="submit" name="submit"  value="Submit" className="btn btn-default"/>
            </form>
        );
    }
}
ContactUs.propTypes={

    firstname: React.PropTypes.string.isRequired,
    lastname: React.PropTypes.string.isRequired

}

ContactUs.defaultProps = {
    firstname : "firstname",
    lastname : "lastname"
}

