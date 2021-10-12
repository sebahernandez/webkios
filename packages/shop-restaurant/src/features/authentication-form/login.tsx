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
import { SET_CLIENTE, ADD_CLIENTE } from '../../utils/graphql/mutation/register_client';
import { ADD_VISITA } from '../../utils/graphql/mutation/visitas';
import GoogleLogin from 'react-google-login'; 
import Cookies  from 'universal-cookie';
import { useRouter } from 'next/router';


export default function SignInModal({cid}) { 
  const intl = useIntl();
  const { authDispatch } = useContext<any>(AuthContext);
  const [id, setId] = React.useState(0);
  const [user, setUser] = React.useState(null);
  const [closed, setClosed] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [addVisita] = useMutation(ADD_VISITA );
  const [addCliente,{ data:data2, loading, error:error2 }] = useMutation(ADD_CLIENTE );
  const cookie = new Cookies();
 
  const router = useRouter();


  useEffect(()=> {
    console.log('xxx', cookie.get('user_logged'))
  },[])

   
   function LoadUser ({email}) {
      console.log('loadUser 1')
      const { loading, error, data } = useQuery(GET_CLIENTE_USERNAME, {
        variables: {
          clientid: cid,
          username: email
        } 
      });
      console.log('error 2')
      if(error) {
        console.log(error)
        return <p>Error {error}</p>;
      }
      if (loading) {
        
        return <p>Loading ...</p>;
      } 

      if ( data && data.cliente && data.cliente.length > 0 ) {
        
         addVisita({
           variables: {
                     cliente: data.cliente[0].id, 
                    clientid: cid
                   }
         });
        cookie.set('customer', data.cliente[0])
        router.push('/checkout')
        closeModal(); 
      } else {
        console.log('loadUser else')

        console.log('loadUser email ', email)
        
        if( id === 0) 
        {
          try{

          
            addCliente({
              variables: { 
                        username: email, 
                        clientid: cid
                      }
            });  

          } catch( error ){
            console.log(error)
          }
        } 
        if( data2 && id === 0) 
        {
        
          cookie.set('customer', data2.insert_cliente.returning[0].id)
          setId(data2.insert_cliente.returning[0].id) 
          router.push('/checkout')
          closeModal(); 
        } 
      }

     return null;
    }

  


    function GoogleButton ({isclosed}) {
    
      const responseGoogle = (response) => {
            console.log('responseGoogle');
           setUser(response.profileObj); 
           const user = {
             image: response.profileObj.imageUrl,
             email: response.profileObj.email,
             name: response.profileObj.name
           }
           setEmail(user.email);            
           cookie.set('user_logged', user,{path: '/'})
           cookie.set('access_token', JSON.stringify(response.accessToken),{path: '/'})
           authDispatch({ type: 'SIGNIN_SUCCESS' });  

          setClosed(true)
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
   

  const toggleForgotPassForm = () => {
    authDispatch({
      type: 'FORGOTPASS',
    });
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
        
       {closed && ( <LoadUser email={email}/> )}
 
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
