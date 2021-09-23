import React, {useState} from 'react';
import Link from 'next/link';
import OrderReceivedWrapper, {
  OrderReceivedContainer,
  OrderInfo,
  OrderDetails,
  TotalAmount,
  BlockTitle,
  Text,
  InfoBlockWrapper,
  InfoBlock,
  ListItem,
  ListTitle,
  ListDes,
} from './order-received.style';
import { FormattedMessage } from 'react-intl';
import { Button } from 'components/button/button';

type OrderReceivedProps = {
  order: any,
  date: any,
  datedelivery: any,
  itemscount: any,
  address: any,
  contact: any,
  subtotal:  any,
  discount:  any,
  total:  any
};

/* Se debe tomar los datos de la orden en el checkout que se cargo en session 
 */

const OrderReceived: React.FunctionComponent<OrderReceivedProps> = ({order, date, datedelivery, itemscount, address, contact, subtotal, discount, total}) => {
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {
     
    setLoading(true);


  }
  
  return (
    <OrderReceivedWrapper>
      <OrderReceivedContainer>
      <form action="https://cashier.tu-ecommerce.cl/checkout" method="POST">
           <input type="hidden" name="title" value={order} />
            <input type="hidden" name="price" value={total} />
            
                <Button
                  type='submit'      
                  size='big' 
                  loading={loading}
                  onClick={handleSubmit}
                  style={{ width: '100%' }}
                >
                  <FormattedMessage
                    id='pago'
                    defaultMessage=''
                  />
                </Button>
              
      </form>
        <br /> <br />
        <br />

        <OrderInfo>
          <BlockTitle>
            <FormattedMessage
              id="orderReceivedText"
              defaultMessage="Orden Recepcionada"
            />
          </BlockTitle>

          <Text>
            <FormattedMessage
              id="orderReceivedSuccess"
              defaultMessage="¡Felicidades! Su Orden ha sido generada satisfactoriamente"
            />
          </Text>

          <InfoBlockWrapper>
            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage
                  id="orderNumberText"
                  defaultMessage="Nro. Orden"
                />
              </Text>
              <Text># {order}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage id="orderDateText" defaultMessage="Fecha" />
              </Text>
              <Text>{date}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage id="totalText" defaultMessage="Total" />
              </Text>
              <Text>$ {total}</Text>
            </InfoBlock>

            <InfoBlock>
              <Text bold className="title">
                <FormattedMessage
                  id="paymenMethodText"
                  defaultMessage="Método de Pago"
                />
              </Text>
              <Text>Efectivo</Text>
            </InfoBlock>
          </InfoBlockWrapper>
        </OrderInfo>

        <OrderDetails>
          <BlockTitle>
            <FormattedMessage
              id="orderDetailsText"
              defaultMessage="Order Details"
            />
          </BlockTitle>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="totalItemText"
                  defaultMessage="Total Item"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{itemscount} Items</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="orderTimeText"
                  defaultMessage="Order Time"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>{datedelivery}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="deliveryTimeText"
                  defaultMessage="Delivery Time"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>30 Minutos Delivery Express</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="deliveryLocationText"
                  defaultMessage="Delivery Location"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>
                {address}
              </Text>
            </ListDes>
          </ListItem>
        </OrderDetails>

        <TotalAmount>
          <BlockTitle>
            <FormattedMessage
              id="totalAmountText"
              defaultMessage="Total Amount"
            />
          </BlockTitle>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="subTotal" defaultMessage="Sub total" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>$ {subtotal}</Text>
            </ListDes>
          </ListItem>

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="paymenMethodText"
                  defaultMessage="Payment Method"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>Efectivo</Text>
            </ListDes>
          </ListItem>

          {/* <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage
                  id="paymentMethodName"
                  defaultMessage="Delivery Charge"
                />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>10</Text>
            </ListDes>
          </ListItem> */}

          <ListItem>
            <ListTitle>
              <Text bold>
                <FormattedMessage id="totalText" defaultMessage="Total" />
              </Text>
            </ListTitle>
            <ListDes>
              <Text>$ {total}</Text>
            </ListDes>
          </ListItem>
        </TotalAmount>
      </OrderReceivedContainer>
    </OrderReceivedWrapper>
  );
};

export default OrderReceived;
