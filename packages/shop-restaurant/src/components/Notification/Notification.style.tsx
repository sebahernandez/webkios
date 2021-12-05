import styled from "styled-components";
 
const getTitleStyle = ({ $theme }) => {
  return $theme.typography.fontBold14;
  return $theme.typography.font14;
};


export const Header = styled.div`
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between
  border-bottom:1px solid #E6E6E6,
`;
 
