import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import {IndexRoute} from 'react-router'

class TileForm extends React.Component{
    constructor(props){
        super(props)
        this.editFields = this.editFields.bind(this)
        this.state = {
            edit:false
        }
    }
    editFields(){
        this.setState({
            edit: true
        })
    }
    render(){
        return(
            <div>
                <form>
                    <div className="form-group">
                        <h3> Showing image{this.props.match.params.imageId} Data</h3>
                        <label for="title">Title</label>
                        <input type="text" classame="title form-control" id="title" />
                        <input type="button" value="edit" onClick={this.editFields}/>
                        {this.state.edit ? <div><input type="button" value="save"/> <input type="button" value="cancel"/></div> : ''}
                    </div>

                </form>
            </div>
        )
    }
}

export default TileForm