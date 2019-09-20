import React, { useState, useRef, useEffect } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';

import { SignUpContainer, SignUpTitle } from './SignUp.styles';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

const SignUp = () => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const persistDataOverRerender = useRef({ willUnmount: false });

  useEffect(() => () => {
    persistDataOverRerender.current.willUnmount = true;
  }, []);

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });

      !persistDataOverRerender.current.willUnmount && setCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle className="title">I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          required
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
        />
        <FormInput
          required
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
        />
        <FormInput
          required
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
        />
        <FormInput
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
