import React from 'react';

import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

import './signin-and-signup.styles.scss';

const SigninAndSignupPage = () => (
  <div className='signin-and-signup'>
    <Signin />
    <Signup />
  </div>
);

export default SigninAndSignupPage;