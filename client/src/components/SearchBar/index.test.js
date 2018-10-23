import * as React from 'react';
import { shallow } from 'enzyme';
import "../../setupTests";

// Component.
import SearchBar from './';

it('SearchBar renders without crashing', () => {
  const searchBar = shallow( <SearchBar /> );
  expect(searchBar.find('.SearchBar').length).toEqual(1);
});
