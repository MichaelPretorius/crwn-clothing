import React from 'react';
import { shallow } from 'enzyme';

import { CollectionPage } from './CollectionPage';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

describe('CollectionPage', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Test'
    };
  
    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });
  
  test('should render CollectionPage component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  })

  test('should render same number of CollectionItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  })
})

