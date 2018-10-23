import * as React from 'react';
import { shallow } from 'enzyme';
import "../../setupTests";

// Components.
import Container from './';
import LoadScreen from '../LoadScreen';
import ErrorScreen from '../ErrorScreen';

describe('Container: ', () => {
  const container = shallow(<Container />);

  // Container still not yet loaded
  test('Renders - still loading', () => {
    const loadScreen = shallow(<LoadScreen />);
    container.setState({ isLoaded: false });

    // Epecting Container to not have been rendered
    expect(container.find('.Container').length).toEqual(0);

    // Expecting LoadScreen to be rendered
    expect(loadScreen.find('.LoadScreen').length).toEqual(1);
  });

  // Container has no Error
  test('Renders - no error', () => {
    container.setState({ isLoaded: true });
    expect(container.find('.Container').length).toEqual(1);
  });

  // Container has an Error
  test('Renders - has error', () => {
    const error = {
      message: 'Has and Error',
    }
    const errorScreen = shallow(<ErrorScreen error={error} />);
    container.setState({ error });
    
    // There's an error, don't render Container
    expect(container.find('.Container').length).toEqual(0);

    // Instead render ErrorScreen
    expect(errorScreen.find('.ErrorScreen').length).toEqual(1);
  });
})
