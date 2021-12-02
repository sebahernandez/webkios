import styled from 'styled-components';

export const NotificationIconWrapper = styled.div`
  display:flex;
  position:relative;
  margin:0 0px;
  cursor:pointer;
  @media only screen and (max-width: 767px) {
    margin:0 20px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px){
    margin: 0 30px;
  }
`;

export const AlertDot = styled.div`

  justifyContent:center;
  alignItems:center;
  color:green;
  position:absolute;
  top:-2px;
  right:16px;
  
`;

export const TopbarWrapper = styled.div`
  width:100%;
  display:flex;
  alignItems:center;
  justifyContent:space-between;
  backgroundColor:#fff;
  padding:30px 60px;
  boxShadow:0px 1px 2px rgba(0, 0, 0, 0.06);
  position:relative;

  @media only screen and (max-width: 767px){
    padding:20px;
  }
  @media only screen and (max-width: 1440px){
    padding:20px 45px;
  }
`;

export const DrawerIcon = styled.div`
  color: black;
  cursor:pointer;
`;

export const TopbarRightSide = styled.div`
  display:flex;
  alignItems:center;
`;

export const UserDropdowItem = styled.div`
  display:flex;
  flexDirection:column;
`;

export const DrawerWrapper = styled.div`
  @media only screen and (min-width: 1200px){
    display:none;
  }
`;
