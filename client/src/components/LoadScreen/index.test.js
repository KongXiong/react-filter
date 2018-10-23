import * as React from 'react';
import { shallow } from 'enzyme';
import "../../setupTests";

// Component.
import LoadScreen from './';

it('LoadScreen renders without crashing', () => {
  const loadScreen = shallow( < LoadScreen /> );
  expect(loadScreen.find('.LoadScreen').length).toEqual(1);
});
