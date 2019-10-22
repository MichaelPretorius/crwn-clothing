import React from 'react';
import { shallow } from 'enzyme';

import { CheckoutPage } from './CheckoutPage';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

describe('CheckoutPage', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockProps = {
      cartItems: mockItems,
      total: 100
    };
  
    wrapper = shallow(<CheckoutPage {...mockProps} />);
  });
  
  test('should render CheckoutPage component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })

  test('should render same amount CartItem as mockarray', () => {
    expect(wrapper.find(CheckoutItem).length).toEqual(mockItems.length)
  })
  
})

