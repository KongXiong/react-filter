import React, { Component } from 'react';
import { API_ENDPOINTS } from '../../constants';

// Components
import ErrorScreen from '../ErrorScreen';
import LoadScreen from '../LoadScreen';
import Title from '../Title';
import SearchBar from '../SearchBar';

class Container extends Component {
	constructor(props) {
		super(props);

		this.state={ 
			error: null,
			isLoaded: false,
			titles: []
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		fetch(API_ENDPOINTS.TITLES)
		.then(res => res.json())
		.then(
			(result) => {
				const titles = result.map(x => x.volumeInfo.title).sort()
				this.setState({
					isLoaded: true,
					titles: titles
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}

	handleSearch(event) {
		event.preventDefault();
		const titles = this.state.titles;

		const updatedList = titles.filter( (title) =>
			title.toLowerCase().search(event.target.value.toLowerCase()) !== -1
		);
		this.setState({titles: updatedList.sort});
	}
	
	render() {
		const { error, isLoaded, titles } = this.state;
		if (error) {
			return <ErrorScreen error/>
		} else if (!isLoaded) {
			return <LoadScreen />
		} else {
			return (
				<div className="Container row">
					<SearchBar 
						label="Filter"
						handleSearch={this.handleSearch} 
					/>
					<div>
						{titles.map( title =>
							<Title key={title} title={title}/>
						)}
					</div>
				</div>
			)
		}
	}
}

export default Container;