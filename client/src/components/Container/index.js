import React, { Component } from 'react';
import Item from '../Item';
import SearchBar from '../SearchBar';

class Container extends Component {
	constructor(props) {
		super(props);

		this.state={ 
			error: null,
			isLoaded: false,
			items: []
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		fetch('/api/hello')
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					items: result.items
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
		const items = this.state.items;

		const updatedList = items.filter( (item) =>
			item.toLowerCase().search(event.target.value.toLowerCase()) !== -1
		);
		this.setState({items: updatedList});
	}
	
	render() {
		const { error, isLoaded, items } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<div>
					<SearchBar handleSearch={this.handleSearch} />
					<div>
						{items.map( (item) =>
							<Item item={item}/>
						)}
					</div>
				</div>
			)
		}
	}
}

export default Container;