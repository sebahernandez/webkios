import React, { useContext } from 'react';
import Router from 'next/router';
import { AuthContext } from 'contexts/auth/auth.context';
import {
  SidebarWrapper,
  SidebarTop,
  SidebarBottom,
  SidebarMenu,
  LogoutButton,
} from './sidebar.style';
import { FormattedMessage } from 'react-intl';
import {
  PROFILE_SIDEBAR_TOP_MENU,
  PROFILE_SIDEBAR_BOTTOM_MENU,
} from 'site-settings/site-navigation';
import { useCart } from 'contexts/cart/use-cart';
import Cookies  from 'universal-cookie';

const SidebarCategory: React.FC<{}> = () => {
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
    if (typeof window !== 'undefined') { 
      const cookie = new Cookies() 
      await cookie.remove('access_token',{path: '/'});
      await cookie.remove('user_logued',{path: '/'}); 
      await deleteAllCookies(); 
      await clearCart(); 
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/grocery');
    }
  };
  return (
    <>
      <SidebarWrapper>
        <SidebarTop>
          {PROFILE_SIDEBAR_TOP_MENU.map((item, index) => (
            <SidebarMenu href={item.href} key={index} intlId={item.id} />
          ))}
        </SidebarTop>

        <SidebarBottom>
          {PROFILE_SIDEBAR_BOTTOM_MENU.map((item, index) => (
            <SidebarMenu href={item.href} key={index} intlId={item.id} />
          ))}
          
        </SidebarBottom>
      </SidebarWrapper>
    </>
  );
};

export default SidebarCategory;
