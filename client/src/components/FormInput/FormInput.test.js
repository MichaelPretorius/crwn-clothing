import React from 'react';
import { shallow } from 'enzyme';

import FormInput from './FormInput';

describe('FormInput', () => {
  let wrapper;
  let mockHandleChange;
  const mockLabel = 'email'

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: mockLabel,
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  test('should render FormInput component', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });

  test('should call handleChange method when input changes', () => {
    wrapper.find('FormInputContainer').simulate('change');

    expect(mockHandleChange).toBeCalled();
  });

  test('should render FormInputLabel if there is a label', () => {
    expect(wrapper.find('FormInputLabel').text()).toEqual(mockLabel);
  });

  test('should not render FormInputLabel if there is no label', () => {
    const mockNewProps = {
      label: '',
      value: 'test@gmail.com',
      handleChange: mockHandleChange
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);

    expect(newWrapper.exists('FormInputLabel')).toBe(false);
  });
});