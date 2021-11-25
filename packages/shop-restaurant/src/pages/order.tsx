import React, {useEffect } from 'react';
import { NextPage } from 'next';
import { SEO } from 'components/seo';
import { useQuery } from '@apollo/client'; 
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query';
import Order from 'features/user-profile/order/order';
import {
  PageWrapper,
  SidebarSection,
} from 'features/user-profile/user-profile.style';
import Sidebar from 'features/user-profile/sidebar/sidebar';
import { Modal } from '@redq/reuse-modal';
import Cookies  from 'universal-cookie';

export interface Site {
  site_name: string,
  description: string
}

const OrderPage: NextPage = () => {
  let mySite: Site = null
  const cookie = new Cookies()
  const cid = cookie.get('clientid')

  const { data, error, refetch, fetchMore } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: cid
        }
    }); 
    if(data) {
      mySite = data.suscripciones[0] 
    }

  return (
    <>
         <SEO title={"Pedido - " + (data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].titulo)} 
       description={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].descripcion)}
       nombre={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].nombre)}
       tags={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].tags)}  />     
   
      <Modal>
        <PageWrapper>
          <SidebarSection>
            <Sidebar />
          </SidebarSection>

          <Order />
        </PageWrapper>
      </Modal>
    </>
  );
};

export default OrderPage;
