import React from 'react';
import { Button } from 'components/button/button';
import { FormattedMessage } from 'react-intl';
import Popover from 'components/popover/popover';
import { AuthorizedMenu } from './authorized-menu';
import { avatar } from 'assets/images/user.jpg';
import Cookies  from 'universal-cookie';

interface Props {
  isAuthenticated: boolean;
  onJoin: () => void;
  onLogout: () => void;
  avatar: string;
}
 
const AuthMenu = ({ isAuthenticated, onJoin, onLogout, avatar }: Props) => {
  let image='/user.jpg';
  let nombre='Invitado';
  let user = null;
  let access_token  = null;
  const cookie = new Cookies()

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
   

  return !isAuthenticated ? (
    <Button variant="primary" onClick={onJoin}>
      <FormattedMessage id="joinButton" defaultMessage="join" />
    </Button>
  ) : (
    <Popover
      direction="right"
      className="user-pages-dropdown"
      handler={<img src={image} alt={nombre} />}
      content={<AuthorizedMenu onLogout={onLogout} />}
    />
  );
};
export default AuthMenu;
