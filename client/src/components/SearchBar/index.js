import React from 'react';

const SearchBar = (props) =>
	<form className='container' onSubmit={props.handleSearch}>
		<label>Search</label>
		<input type="text" />
		<button type='submit'> Submit </button>
	</form>;

export default SearchBar;