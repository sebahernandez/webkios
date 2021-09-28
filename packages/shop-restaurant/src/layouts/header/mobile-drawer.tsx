import React, { useContext } from 'react';
import { openModal } from '@redq/reuse-modal';
import Router from 'next/router';
import { FormattedMessage } from 'react-intl';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import Drawer from 'components/drawer/drawer';
import { Button } from 'components/button/button';
import NavLink from 'components/nav-link/nav-link';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import Cookies  from 'universal-cookie';

import {
  DrawerBody,
  HamburgerIcon,
  DrawerContentWrapper,
  DrawerClose,
  DrawerProfile,
  LogoutView,
  LoginView,
  UserAvatar,
  UserDetails,
  DrawerMenu,
  DrawerMenuItem,
  UserOptionMenu,
} from './header.style';
import UserImage from 'assets/images/user.jpg';
import {
  MOBILE_DRAWER_MENU,
  MOBILE_AUTHORIZED_DRAWER_MENU,
  PROFILE_PAGE,
  YOUR_ORDER_PAGE,
} from 'site-settings/site-navigation';
import { useAppState, useAppDispatch } from 'contexts/app/app.provider';

const MobileDrawer: React.FunctionComponent = () => {
  const isDrawerOpen = useAppState('isDrawerOpen');
  const dispatch = useAppDispatch();
  const cookie = new Cookies()
  let image='/user.jpg';
  let nombre='Invitado';
  let user = null
  let access_token  = null

  const {
    authState: { isAuthenticated },
    authDispatch,
  } = useContext<any>(AuthContext);
  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE_DRAWER',
    });
  }, [dispatch]);

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      cookie.remove('access_token');
      authDispatch({ type: 'SIGN_OUT' });
      Router.push('/');
    }
  };

  if(isAuthenticated){
    if( cookie.get('user_logged') ){
      user = cookie.get('user_logged')
      access_token = cookie.get('access_token')

      if(user && access_token)  {
          image =   user.image;
          nombre = user.name; 
      }
    }
  }
   

  const signInOutForm = () => {
    dispatch({
      type: 'TOGGLE_DRAWER',
    });

    authDispatch({
      type: 'SIGNIN',
    });

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

  return (
    <Drawer
      width='316px'
      drawerHandler={
        <HamburgerIcon>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      }
      open={isDrawerOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <DrawerClose>
          <CloseIcon />
        </DrawerClose>
      }
    >
      <DrawerBody>
        <Scrollbar className='drawer-scrollbar'>
          <DrawerContentWrapper>
            <DrawerProfile>
              {isAuthenticated ? (
                <LoginView>
                  <UserAvatar>
                      <img src={image} alt={nombre} />
                  </UserAvatar>
                  <UserDetails>
                    <h3>{nombre}</h3>
                    <span>{user.email}</span>
                    <span>{cookie.get('customer') && cookie.get('customer').contacts && cookie.get('customer').contacts.length > 0 && cookie.get('customer').contacts[0].number}</span>
                  </UserDetails>
                </LoginView>
              ) : (
                <LogoutView>
                  <Button variant='primary' onClick={signInOutForm}>
                    <FormattedMessage
                      id='mobileSignInButtonText'
                      defaultMessage='join'
                    />
                  </Button>
                </LogoutView>
              )}
            </DrawerProfile>

            <DrawerMenu>
              {isAuthenticated && MOBILE_AUTHORIZED_DRAWER_MENU.map((item) => (
                <DrawerMenuItem key={item.id}>
                  <NavLink
                    onClick={toggleHandler}
                    href={item.href}
                    label={item.defaultMessage}
                    intlId={item.id}
                    className='drawer_menu_item'
                  />
                </DrawerMenuItem>
              ))}
               {!isAuthenticated && MOBILE_DRAWER_MENU.map((item) => (
                <DrawerMenuItem key={item.id}>
                  <NavLink
                    onClick={toggleHandler}
                    href={item.href}
                    label={item.defaultMessage}
                    intlId={item.id}
                    className='drawer_menu_item'
                  />
                </DrawerMenuItem>
              ))}
            </DrawerMenu>

            {isAuthenticated && (
              <UserOptionMenu>
                <DrawerMenuItem>
                  <NavLink
                    href={PROFILE_PAGE}
                    label='Configuración de mi cuenta'
                    className='drawer_menu_item'
                    intlId='navlinkAccountSettings'
                  />
                </DrawerMenuItem>
                <DrawerMenuItem>
                  <div onClick={handleLogout} className='drawer_menu_item'>
                    <span className='logoutBtn'>
                      <FormattedMessage
                        id='navlinkLogout'
                        defaultMessage='Cerrar sesión'
                      />
                    </span>
                  </div>
                </DrawerMenuItem>
              </UserOptionMenu>
            )}
          </DrawerContentWrapper>
        </Scrollbar>
      </DrawerBody>
    </Drawer>
  );
};

export default MobileDrawer;
