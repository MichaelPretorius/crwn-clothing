import React from 'react';
import { shallow } from 'enzyme';

import { MenuItem } from './MenuItem';

describe('MenuItem', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const title = 'hats';
  const size = 'large';
  const imageUrl = 'testimage';

  beforeEach(() => {
    mockMatch = {
      url: '/shop'
    };

    mockHistory = {
      push: jest.fn()
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      size,
      title,
      imageUrl
    };

    wrapper = shallow(<MenuItem {...mockProps} />);
  });

  test('should render MenuItem component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should call history.oush with correct string when MenuItemContainer clicked', () => {
    wrapper.find('MenuItemContainer').simulate('click');

    expect(mockHistory.push).toHaveBeenCalledWith(`${mockMatch.url}shop/${title}`);
  });

  test('should pass size to MenuItemContainer as the prop size', () => {
    expect(wrapper.find('MenuItemContainer').prop('size')).toEqual(size);
  });

  test('should pass imageUrl to BackgroundImageContainer as the prop imageUrl', () => {
    expect(wrapper.find('BackgroundImageContainer').prop('imageUrl')).toEqual(imageUrl);
  });
});