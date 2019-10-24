import React from 'react';

import { CustomButtonContainer } from './CustomButton.style';

export const CustomButton = ({ children, ...props }) => {
  return (
    <CustomButtonContainer {...props} >
      {children}
    </CustomButtonContainer>
  );
}

export default CustomButton;
