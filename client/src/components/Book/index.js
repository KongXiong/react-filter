import React from 'react';

// Styles.
import './index.scss';

const Book = ({title}) =>
	<div className="Book container">
		{title}
	</div>;

export default Book;