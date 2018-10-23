import * as React from 'react';
import { shallow } from 'enzyme';
import "../../setupTests";

// Component.
import Title from './';

it('Title renders without crashing', () => {
  const title = shallow( < Title /> );
  expect(title.find('.Title').length).toEqual(1);
});
