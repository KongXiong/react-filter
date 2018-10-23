import React, { Component } from 'react';
import { API_ENDPOINTS } from '../../constants';

// Components
import ErrorScreen from '../ErrorScreen';
import LoadScreen from '../LoadScreen';
import Book from '../Book';
import SearchBar from '../SearchBar';

class Container extends Component {
	constructor(props) {
		super(props);

		this.state={ 
			error: null,
			isLoaded: false,
			books: []
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		fetch(API_ENDPOINTS.TITLES)
		.then(res => res.json())
		.then(
			(result) => {
				const books = result
				this.setState({
					isLoaded: true,
					books: books
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
		const books = this.state.books;

		const updatedList = books.filter( (book) =>
			book.volumeInfo.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1
		);
		this.setState({books: updatedList});
	}
	
	render() {
		const { error, isLoaded, books } = this.state;
		if (error) {
			return <ErrorScreen error/>
		} else if (!isLoaded) {
			return <LoadScreen />
		} else {
			return (
				<div className="container" >
					<SearchBar 
						label="Filter"
						handleSearch={this.handleSearch} 
					/>
					<div className="container">
						{books.map( book =>
							<Book title={book.volumeInfo.title} key={book.id}/>
						)}
					</div>
				</div>
			)
		}
	}
}

export default Container;