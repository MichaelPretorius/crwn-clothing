import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';
import CartDropdown from '../CartDropdown/CartDropdown';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    const mockProps = {
      hidden: true,
      currentUser: {
        uid: '123'
      },
    };

    wrapper = shallow(<Header {...mockProps} />);
  });

  test('should render Header', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  describe('if currentUser is present', () => {
    test('should render sign out link', () => {
      expect(wrapper.find('OptionLink').at(2).text()).toEqual('SIGN OUT');
    });
  });

  describe('if currentUser is null', () => {
    test('should render sign in link', () => {
      const mockProps1 = {
        hidden: true,
        currentUser: null,
      };
      const wrapper1 = shallow(<Header {...mockProps1} />);

      expect(wrapper1.find('OptionLink').at(2).text()).toEqual('SIGN IN');
    });
  });

  test('should not render CartDropdown if hidden is true', () => {
    expect(wrapper.exists(CartDropdown)).toBe(false);
  });

  test('should render cartDropdown if hidden false', () => {
    const mockProps2 = {
      hidden: false,
      currentUser: null,
    };
    const wrapper2 = shallow(<Header {...mockProps2} />);

    expect(wrapper2.exists(CartDropdown)).toBe(true);
  });
});