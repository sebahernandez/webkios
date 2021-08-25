import React, { useContext } from 'react';
import SignInForm from './login';
import SignOutForm from './register';
import ForgotPassForm from './forgot-password';
import { AuthContext } from 'contexts/auth/auth.context'; 
import config from '../../setting/config';   

export default function AuthenticationForm() {
  const { authState } = useContext<any>(AuthContext);
  const cid =  config().SUBSCRIPTION_ID;
  let RenderForm;

  if (authState.currentForm === 'signIn') {
    RenderForm = SignInForm;
  }

  if (authState.currentForm === 'signUp') {
    RenderForm = SignOutForm;
  }

  if (authState.currentForm === 'forgotPass') {
    RenderForm = ForgotPassForm;
  }

  return <RenderForm   cid={cid}/>;
}
