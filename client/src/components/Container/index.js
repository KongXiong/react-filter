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
			initialBooks:[],
			books: []
		};
		this.handleSearch = this.handleSearch.bind(this);
	}

	componentDidMount() {
		fetch(API_ENDPOINTS.TITLES)
		.then(res => res.json())
		.then(
			(result) => {
				const books = result.sort(this.sortTitle)
				this.setState({
					isLoaded: true,
					initialBooks: books,
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
		let books = [];

		if (event.keyCode === 8){
			books = this.state.initialBooks;
		} else {
			books = this.state.books;
		}

		const updatedList = books.filter( (book) =>
			book.volumeInfo.title.toLowerCase().search(event.target.value.toLowerCase()) !== -1
		).sort(this.sortTitle);
		this.setState({books: updatedList});
	}

	sortTitle(a, b) {
	  const bookA = a.volumeInfo.title.toLowerCase();
	  const bookB = b.volumeInfo.title.toLowerCase();

	  let comparison = 0;
	  if (bookA > bookB) {
	    comparison = 1;
	  } else if (bookA < bookB) {
	    comparison = -1;
	  }
	  return comparison;
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