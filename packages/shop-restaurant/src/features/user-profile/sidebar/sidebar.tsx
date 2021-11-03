import React, { useContext } from 'react'; 
import {
  SidebarWrapper,
  SidebarTop,
  SidebarBottom,
  SidebarMenu,  
} from './sidebar.style';
import {
  PROFILE_SIDEBAR_TOP_MENU,
  PROFILE_SIDEBAR_BOTTOM_MENU,
} from 'site-settings/site-navigation';
import { useCart } from 'contexts/cart/use-cart'; 

const SidebarCategory: React.FC<{}> = () => {
  
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
