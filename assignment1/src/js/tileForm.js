import React from 'react'
import axios from 'axios'
import { getData, getVisibleTiles } from '../dataapi/api.js'

class TileForm extends React.Component {
    constructor(props) {
        super(props);
        this.onEditToggle = this.onEditToggle.bind(this);
        this.state = {
            edit: false,
            shows: [],
            searchTerm: "",
            filteredTile:''
        }
    }
    onEditToggle() {
        this.setState({
            edit: !this.state.edit
        })
    }

    componentDidMount() {

        getData().then(shows => {
            let filteredTile = getVisibleTiles(shows,this.props.match.params.id);
            this.setState({ shows : shows, searchTerm: this.props.match.params.id,filteredTile:filteredTile[0]})
        }, error => {
            console.log(error)
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ searchTerm: nextProps.match.params.id })
    }

    render() {
        return (
            <div>
                {
                (this.state.edit ? <InfoEdit onEditToggle={this.onEditToggle} tile={this.state.filteredTile} /> : <Info onEditToggle={this.onEditToggle} tile={this.state.filteredTile} />)
                }
            </div>
        )
    }

}

const Info = ({ tile,onEditToggle }) => {
    return (
        <div className="description form-group">
            <div className="image-info">
                <div className="image-description">Image Title</div>
                <div className="image-description">{tile.title}</div>
                <br/>
                <div className="image-description">Image Name</div>
                <div className="image-description">{tile.name}</div>
            </div>

            <div className="edit">
                <button type="button" value="edit" onClick={onEditToggle}>Edit</button>
            </div>
        </div>
    )
}

class InfoEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            tile:{}
        }
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        this.setState({ tile: this.props.tile })
    }
    onChange(e){
        let tile ={
            "title":e.target.value
        }
        this.setState({tile:tile})
    }
    render() {
        return (
            <div className="form-parent form-group">
                <form className="editable-form form-horizontal">
                    <div className="editField">
                        <div className="field">Image Title editable</div>
                        <input type="text" className="field" name="title" value={this.state.tile.title} onChange= {this.onChange}/>

                        <div className="field">Image Name editable</div>
                        <input type="text" className="field" name="name" value={this.state.tile.name} onChange= {this.onChange}/>
                    </div>

                    <button type="button"  value="save" className="btn btn-default">SAVE</button>
                    <button type="button"  value="cancel" className="btn btn-default" onClick={this.props.onEditToggle}> CANCEL </button>
                </form>
            </div>
        )
    }
}
export default TileForm