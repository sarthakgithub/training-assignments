import type {Match} from 'react-router-dom'

<Route 
	path="/details/:id"
	component={(props: {match : Match}) => {
		const selectedShow = data.shows.find(show => props.match.params.id === show.imdbid)
		return <Details show={selectedShow} {...props} />
	}}
/>

.filter(show => `${show.title}`.indexOf(this.state.searchTerm) >=0)

{data.shows

		.map(show => <TileList key={show.id} show={show} />
		)}

--inline --content-base . --history-api-fallback

export const getData = () => {
	return new Promise(function (resolve, reject) {
		axios.get("/public/assets/db.json")
				.then(res => {
					console.log(res)
					let techies = res.data.techies
					resolve(techies);
				})
				.catch(error => {
					reject(error);
				});
	});
}
getData().then(techies => {
	console.log("res",techies)
	this.setState({techies})
},error => {
	console.log(error)
})

import React from 'react'
import axios from 'axios'
import { getData, getVisibleTechies,saveData } from '../apis/api'
class TechieDetails extends React.Component {
	constructor(props) {
		super(props);
		this.onEditToggle = this.onEditToggle.bind(this);
		this.state = {
			edit: false,
			techies: [],
			searchTerm: "",
			filteredTechie:null
		}
		console.log(this.props)
	}
	onEditToggle() {
		this.setState({
			edit: !this.state.edit
		})
	}
	componentWillMount() {
		console.log("in componentWillMount")
	}
	componentDidMount() {
		console.log("in DidMount"+this.props.match.params.id)
		console.log("IN MOUNT____________")
		getData().then(techies => {
			console.log("res", techies)
			let filteredTechie = getVisibleTechies(techies,this.props.match.params.id);
			console.log(filteredTechie)
			this.setState({ techies: techies, searchTerm: this.props.match.params.id,filteredTechie:filteredTechie[0] })
		}, error => {
			console.log(error)
		})
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("in componentWillMount DidMount" + "--prevprops", prevProps, "--prevstate", prevState)
	}
	componentWillReceiveProps(nextProps) {
		console.log("in componentWillReceiveProps" + "--nextprops", nextProps)
		this.setState({ searchTerm: nextProps.match.params.id })
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log("in shouldComponentUpdate" + "--nextprops", nextProps + "--next state", nextState)
		return true
	}
	componentWillUnmount() {
		console.log("in ccomponentWillUnmountt")
	}

	render() {
		console.log("in DETAILS FORM render");
		console.log(this.state.searchTerm);
		console.log(this.state.filteredTechie)
		return (
				<div>
					{this.state.filteredTechie && (this.state.edit ? <TechieInfoEdit onEditToggle={this.onEditToggle} techie={this.state.filteredTechie} /> : <TechiInfo onEditToggle={this.onEditToggle} techie={this.state.filteredTechie} />)}
				</div>
		)
	}

}

const TechiInfo = ({ techie,onEditToggle }) => {
	return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<div className="col-md-2 col-md-offset-3">Name</div>
						<div className="col-md-4">{techie.name}</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="col-md-2 col-md-offset-3">Title</div>
						<div className="col-md-4">{techie.title}</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button type="button" className="btn btn-info" value="edit" onClick={onEditToggle}>Edit</button>
						<div className="col-md-2 col-md-offset-3">Title</div>

					</div>
				</div>
			</div>
	)
}

class TechieInfoEdit extends React.Component {
	constructor(props) {
		super(props)
		console.log(this.props)
		this.state ={
			techie:{}
		}
		this.onChange = this.onChange.bind(this)
	}
	componentWillReceiveProps(nextProps) {
		console.log("in componentWillReceiveProps EDIT" ,"--nextprops", nextProps)
		this.setState({ techie: this.props.techie })
	}
	componentDidMount() {
		console.log("in DidMount")
		this.setState({ techie: this.props.techie })
	}
	onChange(e){
		let techie ={
			"title":e.target.value
		}
		console.log(this.state.techie)
		this.setState({techie:techie})
	}
	render() {
		console.log("IN TECHINOF EDIT")
		return (
				<div>
					<form className="form-control">
						<div className="form-group">
							<input type="text" value={this.state.techie.title} onChange= {this.onChange}/>
						</div>
						<button type="button" className="btn btn-info" value="save" >SAVE</button>
						<button type="button"  className="btn btn-default"  value="cancel" onClick={this.props.onEditToggle}> CANCEL </button>
					</form>
				</div>
		)
	}
}
export default TechieDetails

export const getVisibleTechies = (techies,param) =>techies.filter((techie,index) => (techie.name.toLowerCase().includes(param) || techie.id.includes(param) ))

new CopyWebpackPlugin([{ from: path.resolve('src/assets/'), to: 'assets' }])