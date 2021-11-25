import React from 'react';
import styled from 'styled-components';
import { Modal } from '@redq/reuse-modal';
import { SEO } from 'components/seo';
import Footer from 'layouts/footer';
import Accordion from 'components/accordion/accordion';
import { useQuery } from '@apollo/client';
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query';  
import Cookies  from 'universal-cookie';

const accordionData = [
  {
    id: 1,
    intlTitleId: 'faqNo1Title',
    intlDetailsId: 'faqNo1Desc',
    values: { number1: 7, number2: 2 },
  },
  {
    id: 2,
    intlTitleId: 'faqNo2Title',
    intlDetailsId: 'faqNo2Desc',
  },
  {
    id: 3,
    intlTitleId: 'faqNo3Title',
    intlDetailsId: 'faqNo3Desc',
  },
  {
    id: 4,
    intlTitleId: 'faqNo4Title',
    intlDetailsId: 'faqNo4Desc',
  },
];

const Heading = styled.h3`
  font-size: 21px;
  font-weight: 700;
  color: #0d1136;
  line-height: 1.2;
  margin-bottom: 25px;
  width: 100%;
  text-align: center;
`;

const HelpPageWrapper = styled.div`
  background-color: #f7f7f7;
  position: relative;
  padding: 130px 0 60px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 989px) {
    padding-top: 70px;
  }
`;

export const HelpPageContainer = styled.div`
  background-color: transparent;
  padding: 0;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  @media (min-width: 990px) {
    width: 870px;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 989px) {
    padding: 30px;
  }
`;

export default function () {

  const cookie = new Cookies()
  const cid = cookie.get('clientid')
  const { data } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: cid
        }
    }); 

  return (
    <Modal>
      <SEO 
       title={"Ayuda - " + (data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].titulo)} 
       description={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].descripcion)}
       nombre={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].nombre)}
       tags={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].tags)}  />
      <HelpPageWrapper>
        <HelpPageContainer>
          <Heading>F.A.Q</Heading>
          <Accordion items={accordionData} />
        </HelpPageContainer>

        <Footer />
      </HelpPageWrapper>
    </Modal>
  );
}
