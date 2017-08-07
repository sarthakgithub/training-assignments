import type {Match} from 'react-router-dom'

<Route 
	path="/details/:id"
	component={(props: {match : Match}) => {
		const selectedShow = data.shows.find(show => props.match.params.id === show.imdbid)
		return <Details show={selectedShow} {...props} />
	}}
/>

