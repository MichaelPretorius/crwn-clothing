import React from 'react';
import { shallow } from 'enzyme';
import SignInUpPage from './SignInUpPage';

it('should render SignInUpPage component', () => {
  expect(shallow(<SignInUpPage />).debug()).toMatchSnapshot();
});
