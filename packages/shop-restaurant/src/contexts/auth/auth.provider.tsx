import React, { useEffect, useReducer, useState } from 'react';
import { AuthContext } from './auth.context';
const isBrowser = typeof window !== 'undefined';
import Cookies  from 'universal-cookie';
import { GET_SUSCRIPCION_X_HOST } from 'utils/graphql/query/suscripcion.query'; 
import { useQuery } from '@apollo/client';
import LoadingWrapper from '../../components/Loading/loading'

const cookie = new Cookies()

const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!cookie.get('access_token'),
  currentForm: 'signIn',
};

function reducer(state: any, action: any) {
  console.log(state, 'auth');

  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        currentForm: 'signIn',
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    case 'SIGNUP':
      return {
        ...state,
        currentForm: 'signUp',
      };
    case 'FORGOTPASS':
      return {
        ...state,
        currentForm: 'forgotPass',
      };
    default:
      return state;
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {

  const [host, setHost] = useState(null)
  const { data, loading } = useQuery(GET_SUSCRIPCION_X_HOST,
    {
        variables: {
          host: host
        }
  }); 
 
  
   useEffect(() => {
   
        if(window.location.hostname==='localhost')
        {
          setHost("%".concat('shop').concat("%"))
        } else 
        if(window) {
          setHost("%".concat(window.location.hostname).concat("%"))
         }  
         
         if(data && data.suscripciones.length > 0) {  
          console.log('SUCCESFULL >>>>>>>>>>> clientid data:' , JSON.stringify(data))
          cookie.remove('clientid')  
          cookie.set('suscriptor',data.suscripciones[0])
          cookie.set('clientid',data.suscripciones[0].clientid)    
          cookie.set('host',JSON.stringify(data.suscripciones[0].negocio_web))    
          cookie.set('tmp',data.suscripciones[0].token_mercado)                  
        }  

  }, [ host, data ]);


  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  
  
  if( loading ) {

    return (<LoadingWrapper></LoadingWrapper>)
        
  } else {

    return (
      data && data.suscripciones.length > 0 && (<AuthContext.Provider value={{ authState, authDispatch }}>
        {children}
      </AuthContext.Provider>)
    );

  }
  
 
};
