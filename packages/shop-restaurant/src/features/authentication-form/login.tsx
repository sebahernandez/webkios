import React, { useEffect,  useContext } from 'react';
import {
  LinkButton,
  Button, 
  Wrapper,
  Container, 
  Heading,
  SubHeading,
  OfferSection,
  Offer, 
  Divider,
} from './authentication-form.style';
import { Facebook } from 'assets/icons/facebook';
import { Google } from 'assets/icons/google';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';
import { closeModal } from '@redq/reuse-modal'; 
import { useQuery,useMutation } from '@apollo/client';
import { GET_CLIENTE_USERNAME_PASSWORD } from '../../utils/graphql/query/clients.query';
import { GET_CLIENTE_USERNAME } from '../../utils/graphql/query/clients.query';
import { SET_CLIENTE } from '../../utils/graphql/mutation/register_client';
import { ADD_VISITA } from '../../utils/graphql/mutation/visitas';
import GoogleLogin from 'react-google-login'; 
import Cookies  from 'universal-cookie';


export default function SignInModal({cid}) { 
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [id, setId] = React.useState(0);
  const [user, setUser] = React.useState(null);
  const [closed, setClosed] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [addVisita] = useMutation(ADD_VISITA );
  const [setCliente] = useMutation(SET_CLIENTE );
  const cookie = new Cookies()
 
  const { data, error,loading } =  useQuery(
    GET_CLIENTE_USERNAME_PASSWORD,
    {
      variables: {
        clientid: cid,
        username: email,
        password: password
      } 
    }
  ); 
  const { data:data1,loading:loading1 } =  useQuery(
    GET_CLIENTE_USERNAME,
    {
      variables: {
        clientid: cid,
        username: email
      } 
    }
  ); 


    function GoogleButton ({isclosed}) {
    
      const responseGoogle = (response) => {
           setUser(response.profileObj); 
           const user = {
             image: response.profileObj.imageUrl,
             email: response.profileObj.email,
             name: response.profileObj.name
           }
           setEmail(user.email);
           cookie.set('customer', data1.cliente[0].id)
           cookie.set('user_logged', user,{path: '/'})
           cookie.set('access_token', JSON.stringify(response.accessToken),{path: '/'})
           authDispatch({ type: 'SIGNIN_SUCCESS' });  
           closeModal(); 
      }
    
     return (
        <GoogleLogin
        clientId={'13854964639-ie0g4ejmkg7fa4e2gb0b2t7hci0b27u0.apps.googleusercontent.com'}
        render={renderProps => (
          <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant='primary'
          size='big'
          style={{ width: '100%' }} >Ingresar con Google</Button>
         
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />);

     
    
    }
  const addVisitaUser = () => {
    
      if(data1 && data1.cliente.length > 0){
        console.log('usuario Encontrado')
        addVisita({
          variables: {
                    cliente: data.cliente[0].id, 
                    clientid: cid
                  }
        });
        
  
      
    };
   }
   

  const toggleSignUpForm = () => {
    authDispatch({
      type: 'SIGNUP',
    });
  };

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS',
    });
  };

  const loginCallback = () => {
    console.log('data...:',JSON.stringify(data))
    // validamos username y password
    if(data && data.cliente.length > 0){
      console.log('usuario Encontrado')
      addVisita({
        variables: {
                  cliente: data.cliente[0].id, 
                  clientid: cid
                }
      });
      if (typeof window !== 'undefined') {
        localStorage.setItem('access_token', `${data.cliente[0].last_seen}`);
        localStorage.setItem('user_logged', JSON.stringify(data.cliente[0])); 
        authDispatch({ type: 'SIGNIN_SUCCESS' });
        closeModal();
      }
    } else {
      console.log('usuario NO existe');     
    }

    
  };

  
  return (
   
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='welcomeBack' defaultMessage='Welcome Back' />
        </Heading>

        <SubHeading>
          <FormattedMessage
            id='loginText'
            defaultMessage='Login with your email &amp; password'
          />
        </SubHeading>
         

       <GoogleButton isclosed={closed} />
        

        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='dontHaveAccount'
            defaultMessage="Don't have any account?"
          />{' '}
          <LinkButton onClick={toggleSignUpForm}>
            <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
          </LinkButton>
        </Offer>
      </Container>

      <OfferSection>
        <Offer>
          <FormattedMessage
            id='forgotPasswordText'
            defaultMessage='Forgot your password?'
          />{' '}
          <LinkButton onClick={toggleForgotPassForm}>
            <FormattedMessage id='resetText' defaultMessage='Reset It' />
          </LinkButton>
        </Offer>
      </OfferSection>
    </Wrapper>
  );
}
