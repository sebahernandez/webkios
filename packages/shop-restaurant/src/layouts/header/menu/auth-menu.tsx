import React from 'react';
import { Button } from 'components/button/button';
import { FormattedMessage } from 'react-intl';
import Popover from 'components/popover/popover';
import { AuthorizedMenu } from './authorized-menu';
import { avatar } from 'assets/images/user.jpg';


interface Props {
  isAuthenticated: boolean;
  onJoin: () => void;
  onLogout: () => void;
  avatar: string;
}
 
const AuthMenu = ({ isAuthenticated, onJoin, onLogout, avatar }: Props) => {
  let image='/assets/images/user.jpg';
  let nombre='No Logged';
  let user = null;
  let access_token  = null;

  if(isAuthenticated){
    if( localStorage && localStorage.getItem('user_logged') && localStorage.getItem('access_token')){
      user = JSON.parse(localStorage.getItem('user_logged'))
      access_token = JSON.parse(localStorage.getItem('access_token'))

      console.log(user.imageUrl)
      console.log(user.name)
      if(user && access_token)  {
          image =   user.imageUrl;
          nombre = user.name;// + ' ' + user.display;
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
