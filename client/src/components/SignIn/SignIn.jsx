import React, { useState, useRef, useEffect } from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebaseUtils';

import { SignInContainer, SingInTitle, ButtonsBarContainer } from './SignIn.styles';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const persistDataOverRerender = useRef({ willUnmount: false })

  useEffect(() => () => {
    persistDataOverRerender.current.willUnmount = true;
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = userCredentials;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      !persistDataOverRerender.current.willUnmount &&
        setCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SingInTitle>I already have an account</SingInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          required
          name="email"
          type="email"
          label="Email"
          value={userCredentials.email}
          handleChange={handleChange}
        />
        <FormInput
          required
          name="password"
          type="password"
          label="Password"
          value={userCredentials.password}
          handleChange={handleChange}
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
                    </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
}

export default SignIn;
