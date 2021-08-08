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
import { GET_CLIENTE_USERNAME } from 'utils/graphql/query/clients.query';
import { GET_ORDERS_PUBLIC } from 'utils/graphql/query/orders.query';

import config from 'setting/config'; 
const cid =  config().SUBSCRIPTION_ID;

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
            <img src={record.imageURL} alt={record.descripcion} />
          </ImageWrapper>

          <ItemDetails>
            <ItemName>{record.nombre}</ItemName>
            <ItemSize>{record.cantidad}</ItemSize>
            <ItemPrice>${record.precio_venta}</ItemPrice>
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
    width: 100,
    render: (text, record) => {
      return <p>${record.total}</p>;
    },
  },
];


const OrdersContent: React.FC<{}> = () => {
  const [order, setOrder] = useState(null);
  const [active, setActive] = useState('');
  const [id, setId] = useState(0);
  const [mail, setMail] = useState('');

  const [targetRef, size] = useComponentSize();
  const orderListHeight = size.height - 79;

 

  const { data:data1, error:error1, loading:loading1 } =  useQuery(
    GET_CLIENTE_USERNAME,
    {
      variables: {
        clientid: cid,
        username: mail
        
      } 
    }
  ); 
  
  // Carga de Pedidos del Usuario Logueado
  const { data, error, loading } = useSubscription(GET_ORDERS_PUBLIC, {
    variables: {
      limit: 5,
      user: id,
      clientid: cid
    },
  }); 

   useEffect(() => {
    setMail(JSON.parse(localStorage.getItem('user_logged')).email)      

    if (data1 && data1.cliente && data1.cliente.length > 0) {
      setId( data1.cliente[0].id )
    }
    if (data && data.pedido && data.pedido.length !== 0) {
      setOrder(data.pedido[0]);
      setActive(data.pedido[0].id);
    }
  }, [data && data.pedido]);

  

  if (loading) {
    return <div>loading...</div>;
  }
 
  if (error) return <div>{error.message}</div>; 

  const handleClick = (order: any) => {
    setOrder(order);
    setActive(order.id);
  };

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
            <FormattedMessage
              id='intlOrderPageTitle'
              defaultMessage='Mi Pedido'
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
                    onClick={() => {
                      handleClick(current);
                    }}
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
              address={order.delivery_address}
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
            onClick={() => {
              handleClick(order);
            }}
          />
        </OrderList>
      </MobileView>
    </OrderBox>
  );
};

export default OrdersContent;
