import React from 'react';
import { shallow } from 'enzyme';

import { CheckoutItem } from './CheckoutItem';

describe('CheckoutItem', () => {
  let wrapper;
  let mockClearItem;
  let mockAddItem;
  let mockRemoveItem;

  beforeEach(() => {
    mockClearItem = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();

    const mockProps = {
      cartItem: {
        imageUrl: 'www.testImage.com',
        price: 10,
        name: 'hats',
        quantity: 2
      },
      clearItemFromCart: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  test('should render CheckoutItem component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should call clearItem when remove button clicked', () => {
    wrapper.find('RemoveButtonContainer').simulate('click');
    expect(mockClearItem).toBeCalled();
  })
  
  test('should call addItem when right arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .childAt(2)
      .simulate('click');

    expect(mockAddItem).toBeCalled();
  })

  test('should call removeItem when left arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .childAt(0)
      .simulate('click');

    expect(mockRemoveItem).toBeCalled();
  })
  
})
