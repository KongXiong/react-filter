import React from 'react';

const Item = (props) =>
	<div key={props.item}>
		{props.item}
	</div>;

export default Item;