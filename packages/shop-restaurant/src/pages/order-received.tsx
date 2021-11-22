import React ,  { useEffect } from 'react';
import { SEO } from 'components/seo';
import OrderReceived from 'features/order-received/order-received';

import { useQuery, gql } from '@apollo/client'; 
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query';
import Cookies  from 'universal-cookie';

export default function OrderReceivedPage() {

  const cookie = new Cookies()
  const cid = cookie.get('clientid')
  var { data, error, refetch, fetchMore } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: cid
        }
    }); 
  const [order, setOrder] = React.useState('')
  const [date, setDate] = React.useState('')
  const [datedelivery, setDatedelivery] = React.useState('')
  const [itemscount, setItemscount] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [contact, setContact] = React.useState('')
  const [subtotal, setSubTotal] = React.useState('')
  const [discount, setDiscount] = React.useState('')
  const [total, setTotal] = React.useState('')


  useEffect(() => {
    setOrder(sessionStorage.getItem('order'))
    setDate(sessionStorage.getItem('date'))
    setDatedelivery(sessionStorage.getItem('datedelivery'))
    setItemscount(sessionStorage.getItem('itemscount'))
    setAddress(sessionStorage.getItem('address'))
    setContact(sessionStorage.getItem('contact'))
    setSubTotal(sessionStorage.getItem('subtotal'))
    setDiscount(sessionStorage.getItem('discount'))
    setTotal(sessionStorage.getItem('total'))


  }, [order]);

  console.log('OrderReceivedPage')

 
  return (
    <>
      <SEO title={data && data.info_shop_view.length > 0 && data.info_shop_view[0].site_name} description={data && data.info_shop_view.length > 0 && data.info_shop_view[0].description + ' - Detalle'} />
      <OrderReceived 
        order={order} 
        date={date} 
        datedelivery={datedelivery} 
        itemscount={itemscount} 
        delivery_address={address} 
        contact={contact} 
        subtotal={subtotal}
        discount={discount}
        total={total}
        />
    </>
  );
};

/* export default OrderReceivedPage; */
