import React from 'react';
import { shallow } from 'enzyme';
import { CartIcon } from './CartIcon';

describe('CartIcon', () => {
  let wrapper;
  let mockToggleCartHidden;
  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      toggleCartHidden: mockToggleCartHidden
    };

    wrapper = shallow(<CartIcon {...mockProps} />);
  });

  test('should render CartIcon component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
  
  test('should call toggleCartHidden when icon is clicked', () => {
    wrapper.find('CartIconContainer').simulate('click');
    expect(mockToggleCartHidden).toBeCalled();
  });
  
  test('should render itemCount as the text', () => {
    const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
    expect(itemCount).toEqual(0);
  });
})
