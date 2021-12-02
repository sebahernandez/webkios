import React, { useEffect,  useContext, useState } from 'react';
import {
  LinkButton,
  Button, 
  Wrapper,
  Container, 
  Heading,
  SubHeading,
  OfferSection,
  Offer,  
} from './authentication-form.style'; 
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';
import { closeModal } from '@redq/reuse-modal'; 
import { useQuery,useMutation } from '@apollo/client';
import { GET_CLIENTE_USERNAME } from '../../utils/graphql/query/clients.query';
import { GET_ABANDONADOS } from '../../utils/graphql/query/abandonados.query';
import { ADD_CLIENTE } from '../../utils/graphql/mutation/register_client';
import { ADD_VISITA } from '../../utils/graphql/mutation/visitas';
import GoogleLogin from 'react-google-login'; 
import Cookies  from 'universal-cookie';
import { useRouter } from 'next/router';
import localforage from 'localforage';

export default function SignInModal({cid}) {  
  const { authDispatch } = useContext<any>(AuthContext);
  const [id, setId] = React.useState(0); 

  const [user, setUser] = React.useState(null);
  const [closed, setClosed] = React.useState(false);
  const [email, setEmail] = React.useState(''); 
  const [customerid, setCustomerid] = React.useState(0); 
  const [addVisita] = useMutation(ADD_VISITA );
  const [addCliente,{ data:data2, loading, error:error2 }] = useMutation(ADD_CLIENTE );
  const cookie = new Cookies();
 
  const router = useRouter();
  const [carrito, setCarrito] = useState('')

  useEffect(()=> {
    console.log('cookie', cookie.get('user_logged'))
    console.log('localforage', localforage.getItem('@session'))
 
  },[cookie,localforage])

   // Ingresando function de carga de Carrito Abandonado  
   function LoadCarritoAbandonado({customerid}){

    console.log('....... 1')  
    console.log('....... 1.1 ', 'customerid:', customerid)  
    let { data } =  useQuery(GET_ABANDONADOS, {
      variables: {
        clientid: cid,
        customerid: customerid
      } 
    });
    console.log('....... 2')  
    if ( data && data.carritos_abandonados && data.carritos_abandonados.length > 0 ) {
       
        localforage.setItem('@session',data.carritos_abandonados[0].data_json)
    }
    console.log('checkout...')
    if( data &&  data.carritos_abandonados.length > 0 && data.carritos_abandonados[0].data_json !== '' && data.carritos_abandonados[0].data_json !== '{\"isOpen\":false,\"items\":[],\"isRestaurant\":false,\"coupon\":null}')
      router.push('/')

    return null;
  } 
     

   
    function LoadUser ({email}) {
       
      let { loading, error, data } = useQuery(GET_CLIENTE_USERNAME, {
        variables: {
          clientid: cid,
          username: email
        } 
      });
     
      if(error) {
        console.log(error)
        return <p>Error {error}</p>;
      }
      if (loading) {
        
        return <p>Loading ...</p>;
      } 
      console.log('data:',data)
      if ( data && data.cliente && data.cliente.length > 0 ) {
        setCustomerid(data.cliente[0].id)
        
        console.log(',,,,',customerid)
         addVisita({
           variables: {
                     cliente: customerid, 
                     clientid: cid
                   }
         });
        cookie.set('customer', data.cliente[0])
        
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
          if(cookie.get('login') === '2'){
            router.push('/checkout')
          } 
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
        
{/*     {closed && ( <LoadUser email={email}/> )} */}

    {/*    {closed && ( <LoadCarritoAbandonado customerid={328}/> )}   */}
 
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
