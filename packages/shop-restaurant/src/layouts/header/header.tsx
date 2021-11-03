import React from 'react';
import Router, { useRouter } from 'next/router';
import { openModal } from '@redq/reuse-modal';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import { RightMenu } from './menu/right-menu/right-menu';
import { LeftMenu } from './menu/left-menu/left-menu';
import HeaderWrapper from './header.style';
import LogoImage from 'assets/images/logo.svg';
import UserImage from 'assets/images/user.jpg';
import { isCategoryPage } from '../is-home-page';
import Search from 'features/search/search';
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query';
import { useQuery } from '@apollo/client';
import config from 'setting/config';
import Cookies  from 'universal-cookie';

type Props = {
  className?: string;
  visible: boolean;
};

const Header: React.FC<Props> = ({ className, visible }) => {
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);
  const cookie = new Cookies()
  const defaultValue = { first: 'Ron', last: 'Burgundy' };
  const { pathname, query } = useRouter();
  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      cookie.remove('access_token');
      cookie.remove('customer');
      cookie.remove('user_logged');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/grocery');
    }
  };
  const { data, error, refetch, fetchMore } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: config().SUBSCRIPTION_ID
        }
    }); 
  const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN',
    });
    cookie.set('login',1)
    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthenticationForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };

  if(cookie.get('user_logged')!==undefined){
    console.log('header', cookie.get('user_logged')) 
  }
  
  const showSearch = 
    isCategoryPage(query.type) ||
    pathname === '/furniture-two' ||
    pathname === '/grocery-two' ||
    pathname === '/bakery';
  return (
  
   visible && <HeaderWrapper className={className} id="layout-header">
      <LeftMenu logo={data && data.info_shop_view[0].img_site_url} />
      {showSearch && <Search minimal={true} className="headerSearch" />}
      <RightMenu
        isAuthenticated={isAuthenticated}
        onJoin={handleJoin}
        onLogout={handleLogout}
        avatar={UserImage}
      />
    </HeaderWrapper>
  );
};

export default Header;
