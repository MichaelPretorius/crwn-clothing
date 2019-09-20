import React from 'react';

import { SignInUpContainer } from './SignInUpPage.styles';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

const SignInUpPage = () => {
  return (
    <SignInUpContainer>
      <SignIn />
      <SignUp />
    </SignInUpContainer>
  );
}

export default SignInUpPage;
