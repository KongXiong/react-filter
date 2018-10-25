import React from 'react';

// Styles.
import './index.scss';

const ErrorScreen = ({error}) => {
	const { message } = error;

	return(
		<div className="ErrorScreen">
			{ message }
		</div>
	)
}

export default ErrorScreen;