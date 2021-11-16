import React, { useState, useEffect } from 'react';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import { useQuery, gql, useSubscription } from '@apollo/client';
import {
  DesktopView,
  MobileView,
  OrderBox,
  OrderListWrapper,
  OrderList,
  OrderDetailsWrapper,
  Title,
  ImageWrapper,
  ItemWrapper,
  ItemDetails,
  ItemName,
  ItemSize,
  ItemPrice,
  NoOrderFound,
} from './order.style';

import OrderDetails from './order-details/order-details';
import OrderCard from './order-card/order-card';
import OrderCardMobile from './order-card/order-card-mobile';
import useComponentSize from 'utils/useComponentSize';
import { FormattedMessage } from 'react-intl'; 
import { GET_ORDERS_CRM_PUBLIC } from 'utils/graphql/query/orders.query';
import Cookies  from 'universal-cookie';

const cookie = new Cookies();
const cid = cookie.get('cid')  

const progressData = ['Órden Recibida', 'En Preparación' , 'Órden en Camino', 'Órden Entregada'];


const orderTableColumns = [
  {
    title: <FormattedMessage id='cartItems' defaultMessage='Items' />,
    dataIndex: '',
    key: 'items',
    width: 250,
    ellipsis: true,
    render: (text, record) => {
      return (
        <ItemWrapper>
          <ImageWrapper>
            <img src={record.gallery.split(',') && record.gallery.split(',')[0]} alt={record.descripcion} />
          </ImageWrapper>

          <ItemDetails>
            <ItemName>{record.nombre}</ItemName>
            <ItemSize>{record.cantidad}</ItemSize>
            <ItemPrice>{record.precio_venta}</ItemPrice>
          </ItemDetails>
        </ItemWrapper>
      );
    },
  },
  {
    title: (
      <FormattedMessage id='intlTableColTitle2' defaultMessage='Quantity' />
    ),
    dataIndex: 'quantity',
    key: 'quantity',
    align: 'center',
    width: 100,
  },
  {
    title: <FormattedMessage id='intlTableColTitle3' defaultMessage='Price' />,
    dataIndex: '',
    key: 'price',
    align: 'right',
    width: 200,
    render: (text, record) => {
      return <p>${record.total}</p>;
    },
  },
];
type OrderProps = {
  orderid: any;
};
const OrdersCRMContent: React.FC<OrderProps> = ({orderid}) => {
  const [order, setOrder] = useState(null);
  const [active, setActive] = useState('');
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [id, setId] = useState(0);
  const [mail, setMail] = useState('');

  const [targetRef, size] = useComponentSize();
  
  
  // Carga de Pedidos del Usuario Logueado
  const { data, error, loading } = useSubscription(GET_ORDERS_CRM_PUBLIC, {
    variables: {     
      order: orderid,
      clientid: cid
    },
  }); 

   useEffect(() => { 
    if (data && data.pedido && data.pedido.length !== 0) {
      setOrder(data.pedido[0]);
      setActive(data.pedido[0].id);
      setTitle(data.pedido[0].clienteByCliente.nombre)
      setImageURL(data.pedido[0].clienteByCliente.imageURL)
      setMail(data.pedido[0].clienteByCliente.username)
    }
  }, [data && data.pedido]);

  

  if (loading) {
    return <div>cargando...</div>;
  }
 
  if (error) return <div>{error.message}</div>; 

 

  const currentStatus = (order: any) =>{
   
     if(order.is_closed) {
        return 3
     }else {
          if(order.is_delivery) {
            return 2
         } else {
            if(order.is_process) {
              return 1
            } else {
              return 0
            }
         }
     }

  }

  return (
    <OrderBox>
      <DesktopView>
        <OrderListWrapper style={{ height: size.height }}>
          <Title style={{ padding: '0 20px' }}>
             <img src={imageURL} />
             <h1>{title}</h1>
             <FormattedMessage
              id='intlOrderPageTitle'
              defaultMessage='Mis Pedidos'
            />
          </Title>
          <Scrollbar className='order-scrollbar'>
            <OrderList>
              {data.pedido.length !== 0 ? (
                data.pedido.map((current: any) => (
                  <OrderCard
                    key={current.id}
                    orderId={current.order}
                    className={current.id === active ? 'active' : ''}
                    status={progressData[currentStatus(current)]}
                    date={current.order_date}
                    deliveryTime={current.delivery_date}
                    amount={current.total}
            /*         onClick={() => {
                      handleClick(current);
                    }} */
                  />
                ))
              ) : (
                <NoOrderFound>
                  <FormattedMessage
                    id='intlNoOrderFound'
                    defaultMessage='Órden no Encontrada'
                  />
                </NoOrderFound>
              )}
            </OrderList>
          </Scrollbar>
        </OrderListWrapper>

        <OrderDetailsWrapper ref={targetRef}>
          <Title style={{ padding: '0 20px' }}>
            <FormattedMessage
              id='orderDetailsText'
              defaultMessage='Detalle de la Órden'
            />
          </Title>
          {order && order.id && (
            <OrderDetails
              progressStatus={currentStatus(order)+1}
              progressData={progressData}
              delivery_address={order.delivery_address}
              contacts={order.delivery_contacts}
              mail={order.clienteByCliente.username}
              subtotal={order.subtotal}
              discount={order.discount}
              deliveryFee={order.deliveryFee}
              grandTotal={order.total}
              tableData={order.items.length > 0 ? JSON.parse(order.items):order.products}
              columns={orderTableColumns}
            />
          )}
        </OrderDetailsWrapper>
      </DesktopView>

      <MobileView>
        <OrderList>
          <OrderCardMobile
            pedido={data.pedido}
            className={order && order.id === active ? 'active' : ''}
            progressData={progressData}
            columns={orderTableColumns}
           /*  onClick={() => {
              handleClick(order);
            }} */
          />
        </OrderList>
      </MobileView>
    </OrderBox>
  );
};

export default OrdersCRMContent;
