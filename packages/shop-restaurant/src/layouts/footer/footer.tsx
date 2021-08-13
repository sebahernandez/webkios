import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from './footer.style';
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query'; 
import { useQuery, gql } from '@apollo/client';
import config from 'setting/config';


export const Footer = ( ) => {


  const { data, error, refetch, fetchMore } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: config().SUBSCRIPTION_ID
        }
    }); 

  return (
    <Box>
      
      <Container>
        <Row>
          <Column>
            <Heading>{data && data.info_shop_view[0].site_name}</Heading>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Youtube</FooterLink>
            <FooterLink href="#">Linkedin</FooterLink>
          </Column>
          <Column>
            <Heading>Enlaces</Heading>
            <FooterLink href="#">Nuestro Blog</FooterLink>
            <FooterLink href="#">Seguir mi pedido</FooterLink>
            <FooterLink href="#">Chat</FooterLink>
            <FooterLink href="#">Conoce nuestros locales</FooterLink>
          </Column>
          <Column>
            <Heading>Información Importante</Heading>
            <FooterLink href="#">Políticas de privacidad</FooterLink>
            <FooterLink href="#">Términos y condiciones</FooterLink>
            <FooterLink href="#">Ayuda</FooterLink>
            <FooterLink href="#">Contacto</FooterLink>
          </Column>
       
        </Row>
      </Container>
      
      <h6 style={{ color: 'gray', textAlign: 'center', padding: '20px 10px', borderTop: '1px solid #009E7F' }}>
      {data && data.info_shop_view[0].site_name} | Por Tu-ecommerce.cl
      </h6>
     
    </Box>
    
  );
};
export default Footer;