import React from 'react';
import { shallow } from 'enzyme';

import { CartDropdown } from './CartDropdown';
import CartItem from '../CartItem/CartItem';

describe('CartDropdown', () => {
  let wrapper;
  let mockHistory;
  let mockToggleCartHidden;
  const mockCartItems = [{ id: 1 }, { id: 2 }, { id: 3 }];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };

    mockToggleCartHidden = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      toggleCartHidden: mockToggleCartHidden
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  test('should render CartDropdown component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should call history.push when button clicked', () => {
    wrapper.find('CartDropdownButton').simulate('click');
    expect(mockHistory.push).toBeCalled();
  })
  
  test('should render same amount CartItem components as CartItem prop', () => {
    expect(wrapper.find(CartItem).length).toEqual(mockCartItems.length)
  })
  
  test('should render EmptyMessageContainer if CartItem prop empty', () => {
    const mockProps = {
      cartItems: [],
      history: mockHistory,
      toggleCartHidden: mockToggleCartHidden
    };
    const wrapper2 = shallow(<CartDropdown {...mockProps} />);

    expect(wrapper2.exists('EmptyMessageContainer')).toBe(true);
  });
})
