import React from 'react';

const SearchBar = (props) =>
	<div className='container'>
		<label>Search</label>
	  <input type="text" onKeyUp={props.handleSearch}/>
	</div>;

export default SearchBar;