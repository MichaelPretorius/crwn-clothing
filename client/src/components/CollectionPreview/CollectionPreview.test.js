import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPreview } from './CollectionPreview';

describe('CollectionPreview', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const mockRouteName = 'hats';

  beforeEach(() => {
    mockMatch = {
      path: '/shop'
    };

    mockHistory = {
      push: jest.fn()
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: 'hats',
      items: []
    };

    wrapper = shallow(<CollectionPreview {...mockProps} />);
  });

  test('should render CollectionPreview', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
  
  test('should call history.push with right string when TitleContainer clicked', () => {
    wrapper.find('TitleContainer').simulate('click');
    expect(mockHistory.push).toBeCalledWith(`${mockMatch.path}/${mockRouteName}`);
  });
})
