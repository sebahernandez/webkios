import React, { useEffect, useReducer, useState } from 'react';
import { AuthContext } from './auth.context';
const isBrowser = typeof window !== 'undefined';
import Cookies  from 'universal-cookie';
import { GET_SUSCRIPCION_X_HOST } from 'utils/graphql/query/suscripcion.query'; 
import { useQuery } from '@apollo/client';

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
  const { data } = useQuery(GET_SUSCRIPCION_X_HOST,
    {
        variables: {
          host: host
        }
  }); 
 
   useEffect(() => {
    if(window) {
      setHost("%".concat(window.location.hostname).concat("%"))
            
    }     
    console.log('>>>>>>>>>>> host1:' , host)
    if(host !== null){  
      console.log('>>>>>>>>>>> host2:' , host)
      if(data && data.suscripciones.length > 0) {  
        console.log('>>>>>>>>>>> cid data:' , JSON.stringify(data))
        cookie.remove('cid')  
        cookie.set('cid',data.suscripciones[0].clientid)          
      } 
    }

  }, [ host, data ]);


  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
