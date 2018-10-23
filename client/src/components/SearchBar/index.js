import React from 'react';

// Styles.
import './index.scss';

const SearchBar = ({
	handleSearch,
	label
}) =>
	<div className='SearchBar container input-group input-group-lg'>
		<input
			className="form-control"
			placeholder={label}
			type="text"
			onKeyUp={handleSearch}/>
	</div>;

export default SearchBar;