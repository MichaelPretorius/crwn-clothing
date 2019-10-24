import React from 'react';
import { shallow } from 'enzyme';
import { CustomButton } from './CustomButton';

test('should render CustomButton component', () => {
  expect(shallow(<CustomButton />).debug()).toMatchSnapshot();
});
