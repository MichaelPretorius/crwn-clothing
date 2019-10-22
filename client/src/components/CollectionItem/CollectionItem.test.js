import React from 'react';
import { shallow } from 'enzyme';

import { CollectionItem } from './CollectionItem';

describe('CollectionItem', () => {
  let wrapper;
  let mockAddItem;
  const imageUrl = 'www.testImage.com';
  const mockName = 'black hat';
  const mockPrice = 10;

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        imageUrl: imageUrl,
        price: mockPrice,
        name: mockName
      },
      addItem: mockAddItem
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  test('should render CollectionItem component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
  
  test('should call addItem when AddButton clicked', () => {
    wrapper.find('ButtonContainer').simulate('click');
    expect(mockAddItem).toBeCalled();
  });
  
  test('should render imageUrl as a prop on BackgroundImage', () => {
    expect(wrapper.find('BackgroundImage').prop('imageUrl')).toEqual(imageUrl)
  })
  
  test('should render name prop in NameContainer', () => {
    expect(wrapper.find('NameContainer').text()).toEqual(mockName);
  });
  
  test('should render price prop in PriceContainer', () => {
    const price = wrapper.find('PriceContainer').text();
    expect(price).toEqual(`R${mockPrice}`);
  });
})
