import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import NavLink from 'components/nav-link/nav-link';
import { AUTHORIZED_MENU_ITEMS } from 'site-settings/site-navigation';
import { useCart } from 'contexts/cart/use-cart';
import Cookies  from 'universal-cookie';
import { AuthContext } from 'contexts/auth/auth.context';
import Router from 'next/router';
import localForage from 'localforage';

type Props = {
  onLogout: () => void;
};


export const AuthorizedMenu: React.FC<Props> = ({ onLogout }) => {


  const { authDispatch } = useContext<any>(AuthContext);
  
  const { 
    clearCart,
  } = useCart();

  function deleteAllCookies() {
    var cookies = document.cookie.split(";");
  
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
  
  const handleLogout = async () => { 
      alert(1)
      const cookie = new Cookies() 
      await cookie.remove('access_token');
      await cookie.remove('customer'); 
      await cookie.remove('user_logged'); 
      localForage.removeItem('@session');
      await deleteAllCookies(); 
      await clearCart(); 
      authDispatch({ type: 'SIGN_OUT' });
    
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
