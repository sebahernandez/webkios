import React, { useContext } from 'react';
import SignInForm from './login';
import SignOutForm from './register';
import ForgotPassForm from './forgot-password';
import { AuthContext } from 'contexts/auth/auth.context';  
import Cookies  from 'universal-cookie';

export default function AuthenticationForm() {


  const cookie = new Cookies();
  const cid = cookie.get('cid')  
  const { authState } = useContext<any>(AuthContext);
  
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
