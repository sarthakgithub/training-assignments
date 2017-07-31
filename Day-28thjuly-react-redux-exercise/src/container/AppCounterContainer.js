import React from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {connect} from 'react-redux'
import * as stateActions from '../Action/action.js'
import UICounter from '../component/AppCounterComponent'
const mapStateToProps = state => {
    var data = {
        counter : state.state.counter
    };
    return data;
};

const mapDispatchToProps = dispatch => ({
    increase: () => dispatch(stateActions.increamentFunction()),
    decrease: () => dispatch(stateActions.decreamentFunction())
})

class AppCounter extends React.Component {

    constructor(props){

        super(props)
        console.log(this.props)
    }


    render(){
        return(
           <UICounter decrease ={this.props.decrease} increase ={this.props.increase} counter ={this.props.counter} />
        )
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(AppCounter)
//export {AppCounter};