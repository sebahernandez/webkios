import React, { useState } from 'react';
import { NextPage } from 'next';
import OrderCRM from 'features/user-profile/order/ordercrm';
import {
  PageWrapper, 
} from 'features/user-profile/user-profile.style';
import Sidebar from 'features/user-profile/sidebar/sidebar';
import { Modal } from '@redq/reuse-modal';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


export interface Site {
  site_name: string,
  description: string
}

const OrderCRMPage: NextPage = () => {
  const { query } = useRouter();
  const [order, setOrder] = useState(null);
  
  useEffect(() => {
    if(query.order) {
      setOrder(query.order)
    }    
  });
  


  return (
    <>
      

      <Modal>
        <PageWrapper>
          <OrderCRM orderid={order}/>
        </PageWrapper>
      </Modal>
    </>
  );
};

export default OrderCRMPage;
