import * as React from 'react';
import { shallow } from 'enzyme';
import "../../setupTests";

// Component.
import Book from './';

it('Book renders without crashing', () => {
  const book = shallow( < Book /> );
  expect(book.find('.Book').length).toEqual(1);
});
