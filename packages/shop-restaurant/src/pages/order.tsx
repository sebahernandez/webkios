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

  const { data:data1, error, refetch, fetchMore } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: cid
        }
    }); 
    if(data1) {
      mySite = data1.suscripciones[0] 
    }

  return (
    <>
       <SEO title={"Pedido - " + (mySite &&  mySite.site_name)} 
        description={mySite && mySite.description} />

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
