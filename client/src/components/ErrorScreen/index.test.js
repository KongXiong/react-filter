import * as React from 'react';
import { shallow } from 'enzyme';
import "../../setupTests";

// Component.
import ErrorScreen from './';

it('ErrorScreen renders without crashing', () => {
	const error = {
		message: 'Oh no, there is an error.',
	}
	const errorScreen = shallow( <ErrorScreen error={error} /> );
	expect(errorScreen.find('.ErrorScreen').length).toEqual(1);
	expect(errorScreen.find('.ErrorScreen').text()).toEqual('Oh no, there is an error.');
});
