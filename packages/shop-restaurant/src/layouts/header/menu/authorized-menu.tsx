import React, { useContext, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import NavLink from 'components/nav-link/nav-link';
import { AUTHORIZED_MENU_ITEMS } from 'site-settings/site-navigation';
import { useCart } from 'contexts/cart/use-cart';
import Cookies  from 'universal-cookie';
import { AuthContext } from 'contexts/auth/auth.context';
import Router from 'next/router';
import localForage from 'localforage';
import config from 'setting/config'; 
import { useMutation, useQuery } from '@apollo/client';
import { GET_ABANDONADOS } from 'utils/graphql/query/abandonados.query';
import { AGREGAR_ABANDONADO } from 'utils/graphql/mutation/abandonados';
import { UPGRADE_ABANDONADO } from 'utils/graphql/mutation/abandonados';

type Props = {
  onLogout: () => void;
};


export const AuthorizedMenu: React.FC<Props> = ({ onLogout }) => {

  const cookie = new Cookies()
  const { authDispatch } = useContext<any>(AuthContext);
  var [carrito, setCarrito] = useState('');

  const [insert_abandonado] = useMutation(AGREGAR_ABANDONADO); 
  const [upgrade_abandonado] = useMutation(UPGRADE_ABANDONADO); 

  const { data } = useQuery(
    GET_ABANDONADOS,
    {
      variables: { 
        clientid: config().SUBSCRIPTION_ID,
        customerid: cookie.get('customer') &&  cookie.get('customer').id
      }
    }
  );

  const { 
    clearCart,
  } = useCart();

  const init = async ()=> {
    if (localForage) {
      var keys = await localForage.keys()
      console.log('key',keys)
      return Promise.all(keys.map(async key => {
        if(key==='@session'){
          console.log('|||||', await localForage.getItem(key))
          setCarrito(await localForage.getItem(key))
        }  
      }))
     }
  }


  useEffect(() => {
     init()
  })


  function deleteAllCookies() {
  
    var cookies = document.cookie.split(";");
  
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
 
  const push = async () => {

    console.log('push!', carrito)  
    if(carrito !== '' && carrito !== '{\"isOpen\":false,\"items\":[],\"isRestaurant\":false,\"coupon\":null}')
    {
      await insert_abandonado({
        variables: { 
          clientid: config().SUBSCRIPTION_ID,
          customerid: cookie.get('customer') && cookie.get('customer').id,
          data_json: carrito
        },
      });  
    }  
  
}

  const put = async () => {
    if(carrito !== '' && carrito !== '{\"isOpen\":false,\"items\":[],\"isRestaurant\":false,\"coupon\":null}')
    {
      await upgrade_abandonado({
        variables: { 
          "clientid": config().SUBSCRIPTION_ID,
          "customerid": cookie.get('customer') && cookie.get('customer').id,
          "data_json": carrito
        },
      });  
   } 
  }

   

  const handleLogout = async () => { 
  

     if ( data && data.carritos_abandonados && data.carritos_abandonados.length > 0 ) {
        await put()
     } 
     if ( data && data.carritos_abandonados && data.carritos_abandonados.length === 0 ) {
        await push()
     }  
     
      await cookie.remove('access_token');
      await cookie.remove('customer'); 
      await cookie.remove('user_logged'); 
      localForage.removeItem('@session');
      await deleteAllCookies(); 
      await clearCart(); 
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/grocery');
  };

  return (
    <>
      {AUTHORIZED_MENU_ITEMS.map((item, idx) => (
        <NavLink
          key={idx}
          className='menu-item'
          href={item.href}
          label={item.defaultMessage}
          intlId={item.id}
        />
      ))}
      <div className='menu-item' onClick={handleLogout}>
        <a>
          <span>
            <FormattedMessage id='nav.logout' defaultMessage='Logout' />
          </span>
        </a>
      </div>
    </>
  );
};
