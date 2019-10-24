import React from 'react';
import { shallow } from 'enzyme';
import { Directory } from './Directory';

test('should render Directory component', () => {
  expect(shallow(<Directory sections={[]} />).debug()).toMatchSnapshot();
});
