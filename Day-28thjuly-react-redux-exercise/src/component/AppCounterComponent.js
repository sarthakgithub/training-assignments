import React from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {connect} from 'react-redux'
import * as stateActions from '../Action/action.js'
//const mapStateToProps = state => {
//    var data = {
//        counter : state.state.counter
//    };
//    return data;
//};
//
//const mapDispatchToProps = dispatch => ({
//    increase: () => dispatch(stateActions.increamentFunction()),
//    decrease: () => dispatch(stateActions.decreamentFunction())
//})
//
//class AppCounter extends React.Component {
//    static propTypes = {
//        dispatch : PropTypes.func.isRequired
//    }
//
//    constructor(props){
//        super(props);
//        //this.state = { counter: 0 };
//        this.increament = this.increament.bind(this);
//        this.decreament = this.decreament.bind(this);
//    }
//
//    //increament () {
//    //    this.setState(function(prevState, props) {
//    //        return {
//    //            count: prevState.counter + 1
//    //        };
//    //    });
//    //}
//    //
//    //decreament () {
//    //    this.setState(function(prevState, props) {
//    //        return {
//    //            count: prevState.counter - 1
//    //        };
//    //    });
//    //}
//
//    //increament(){
//    //    this.props.dispatch(stateActions.increamentFunction())
//    //}
//    //
//    //decreament(){
//    //    this.props.dispatch(stateActions.decreamentFunction())
//    //}
//
//    render(){
//        return(
//            <div className="Counter">
//                <input type="button" value={this.props.counter}/>
//
//                <button onClick = {this.props.increase}> Add 1 </button>
//                <button onClick = {this.props.decrease}> Minus 1 </button>
//            </div>
//        )
//    }
//
//}

const UICounter =(props) =>(

    <div className="Counter">
        <input type="button" value={props.counter}/>

        <button onClick = {props.increase}> Add 1 </button>
        <button onClick = {props.decrease}> Minus 1 </button>
    </div>

)
export default UICounter;