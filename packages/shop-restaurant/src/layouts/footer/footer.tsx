import React from 'react';
import { SocialIcon } from 'react-social-icons';
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
            <Heading>Redes Sociales</Heading>
           <div className="d-flex">
            <SocialIcon className="social-icon" url="#" network="whatsapp"/>
            <SocialIcon className="social-icon" url="#" network="facebook"/>
            <SocialIcon className="social-icon" url="#" network="instagram"/>
           </div>
          </Column>
          <Column>
            <Heading>Enlaces</Heading>
            <FooterLink href="#">¿Donde esta mi pedido?</FooterLink>
            <FooterLink href="#">Chatea con un ejecutivo</FooterLink>
          </Column>
          <Column>
            <Heading>Servicio al Cliente</Heading>
            <FooterLink href="#">Necesitas ayuda</FooterLink>
            <FooterLink href="#">Politicas de privacidad</FooterLink>
            <FooterLink href="#">Términos y condiciones</FooterLink>
            <FooterLink href="#">Feedback o reaclamos</FooterLink>
          </Column>

          
       
        </Row>
      </Container>
      
      <h6 style={{ color: 'gray', textAlign: 'center', padding: '20px 10px', borderTop: '1px solid #009E7F' }}>
      www.tu-ecommerce.cl | by Agencia Eserp
      </h6>
     
    </Box>
    
  );
};
export default Footer;