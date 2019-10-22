import React from 'react';
import { shallow } from 'enzyme';
import { CollectionsOverview } from './CollectionsOverview';

describe('CollectionsOverview', () => {
  test('should render CollectionsOverview component', () => {
    expect(shallow(<CollectionsOverview collections={[]} />).debug()).toMatchSnapshot();
  });
  
})
