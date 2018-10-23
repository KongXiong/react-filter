import React from 'react';

// Styles.
import './index.scss';

const Book = ({title}) =>
	<div className="Book containter border">
		{title}
	</div>;

export default Book;