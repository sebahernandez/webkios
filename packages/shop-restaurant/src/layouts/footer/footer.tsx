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
import { useQuery } from '@apollo/client';
import { Facebook } from 'assets/icons/facebook';
import { Instagram } from 'assets/icons/Instagram';
import { Whatsapp } from 'assets/icons/Whatsapp';
import { Heart } from 'assets/icons/Heart';
import Cookies  from 'universal-cookie';
import Link from 'next/link';

export const Footer = ( ) => {

  const cookie = new Cookies()
  const cid = cookie.get('clientid')
  const { data, error, refetch, fetchMore } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: cid
        }
    }); 

   

  return (
    <Box>
      
      {data && data.suscripciones && data.suscripciones.length > 0 }
      <Container>
        <Row>
          <Column>
            <Heading>Redes Sociales</Heading>
            <div className="d-flex">
              
              <a href={data.suscripciones[0].facebook===null?'#':data.suscripciones[0].facebook} >
                 <Facebook/>
              </a>
              
              <a href={data.suscripciones[0].instagram===null?'#':data.suscripciones[0].instagram} >
               <Instagram/>
              </a> 
              <Whatsapp/>
             </div>
          </Column>
          <Column>
            <Heading>Enlaces</Heading>
            <FooterLink href="#">¿Donde esta mi pedido?</FooterLink>
            <FooterLink href="#">Chatea con un ejecutivo</FooterLink>
   
          </Column>
          <Column>
            <Heading>Servicio al Cliente</Heading>
            <FooterLink href="#">Necesito ayuda</FooterLink>
            <FooterLink href="#">Politicas de privacidad</FooterLink>
            <FooterLink href="#">Terminos y condiciones</FooterLink>
            <FooterLink href="#">Feedback o reclamos</FooterLink>
          </Column>
       
        </Row>
      </Container>
      
      <h6 style={{ color: 'gray', textAlign: 'center', padding: '20px 10px', borderTop: '1px solid #009E7F' }}>
      {data && data.suscripciones.length > 0 &&  data.suscripciones[0].descripcion} | <Heart /> Por Tu-ecommerce.cl
      </h6>
     
    </Box>
    
  );
};
export default Footer;