import * as React from 'react';
import { shallow } from 'enzyme';
import "../../setupTests";

// Component.
import App from './';

it('App renders without crashing', () => {
	const app = shallow(<App />);
	expect(app.find('.App').length).toEqual(1);
});
