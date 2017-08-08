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