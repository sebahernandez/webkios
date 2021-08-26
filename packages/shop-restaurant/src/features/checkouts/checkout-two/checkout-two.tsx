import React, { useContext, useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import { Button } from 'components/button/button';
import { CURRENCY } from 'utils/constant';
import { Scrollbar } from 'components/scrollbar/scrollbar';
import CheckoutWrapper, {
  CheckoutContainer,
  CheckoutInformation,
  InformationBox,
  DeliverySchedule,
  CheckoutSubmit,
  HaveCoupon,
  CouponBoxWrapper,
  CouponInputBox,
  CouponCode,
  RemoveCoupon,
  TermConditionText,
  TermConditionLink,
  CartWrapper,
  CalculationWrapper,
  OrderInfo,
  Title,
  ItemsWrapper,
  Items,
  Quantity,
  Multiplier,
  ItemInfo,
  Price,
  TextWrapper,
  Text,
  Bold,
  Small,
  NoProductMsg,
  NoProductImg,
} from './checkout-two.style';

import { NoCartBag } from 'assets/icons/NoCartBag';

import Sticky from 'react-stickynode';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage } from 'react-intl';
import { useCart } from 'contexts/cart/use-cart';
import { useLocale } from 'contexts/language/language.provider';
import { useWindowSize } from 'utils/useWindowSize';
import Coupon from 'features/coupon/coupon';
import Address from 'features/address/address';
import Schedules from 'features/schedule/schedule';
import Contact from 'features/contact/contact';
import Payment from 'features/payment/payment';
import OrderReceivedPage from 'pages/order-received';
import { ADD_ORDER } from 'utils/graphql/mutation/order';
import { GET_ORDERS_OPEN } from 'utils/graphql/query/orders.query';
import { useQuery, useMutation, gql } from '@apollo/client';
import config from 'setting/config';

// The type of props Checkout Form receives
interface MyFormProps {
  token: string;
  deviceType: any;
  clienteData: any;
}

type CartItemProps = {
  product: any;
};


let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};


const OrderItem: React.FC<CartItemProps> = ({ product }) => {

  const { id, quantity, title, nombre, unit, precio, precio_venta } = product;
  const displayPrice = precio_venta ? precio_venta : precio;

  

  return (
    <Items key={id}>
      <Quantity>{quantity}</Quantity>
      <Multiplier>x</Multiplier>
      <ItemInfo>
        {nombre ? nombre : title} {unit ? `| ${unit}` : ''}
      </ItemInfo>
      <Price>
        {CURRENCY}
        {(displayPrice * quantity).toFixed(0)}
      </Price>
    </Items>
  );
};

type OrderReceivedProps = {
  order: any,
  date: any,
  total:  any
};

const CheckoutWithSidebar: React.FC<MyFormProps> = ({ clienteData, token, deviceType }) => {
  const [hasCoupon, setHasCoupon] = useState(false);
  const { state } = useContext(ProfileContext);
  const { isRtl } = useLocale();
  const [addOrder, {error}] = useMutation(ADD_ORDER );
  const {
    items,
    removeCoupon,
    coupon,
    clearCart,
    cartItemsCount,
    calculatePrice,
    calculateDiscount,
    calculateSubTotalPrice,
    isRestaurant,
    toggleRestaurant,
  } = useCart();
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState(false);
  let { card, schedules } = state; 
  const [address, setAddress] = useState(clienteData.addresses);
  const [contact, setContact] = useState(clienteData.contacts); 
  const size = useWindowSize();
  const { data } = useQuery(
    GET_ORDERS_OPEN,
    {
      variables: {
        clientid: config().SUBSCRIPTION_ID,
        cliente: clienteData.id
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  // SDK de Mercado Pago
  // const mercadopago = require ('mercadopago');
  // Agrega credenciales
  /* mercadopago.configure({
      access_token: 'APP_USR-2672568876104049-082402-83e0b9ceb2e982344cd6dfdfd7b48289-659002112'
  });


  mercadopago.preferences.create(preference)
  .then(function(response){
    // Este valor reemplazará el string "<%= global.id %>" en tu HTML
    // global.id = response.body.id;
  }).catch(function(error){
    console.log(error);
  });

  const checkout = mercadopago.checkout({
    preference
  }); */




  const handleSubmit = async () => {
     
  
     

    if ( true
      /*  !existeOrden() && calculatePrice() > 0 &&
         cartItemsCount > 0  */
        /*  address && address.length &&
          contact && contact.length   */
       ) {  
         setIsValid(true);
       } 
       
    setLoading(true);
    var today = new Date(),
    date = today.getDate() + "/" +
    (today.getMonth() + 1) + "/" +
    today.getFullYear() + "  " +
    today.getHours() + ":" +
    today.getMinutes() + ":" +
    today.getSeconds();

    today.setMinutes(today.getMinutes() + 30);
   
  
    var datedelivery = today.getDate() + "/" +
    (today.getMonth() + 1) + "/" +
    today.getFullYear() + "  " +
    today.getHours() + ":" +
    today.getMinutes() + ":" +
    today.getSeconds();
    console.log('isValid',isValid)
    if (isValid) {
       
      sessionStorage.setItem('items',JSON.stringify(items))
      sessionStorage.setItem('address',clienteData && clienteData.addresses.length > 0 ? clienteData.addresses[0].info: '[]')
      sessionStorage.setItem('contact',clienteData && clienteData.contacts.length > 0 ? clienteData.contacts[0].number: '[]')
      sessionStorage.setItem('order',Date.now().toString())
      sessionStorage.setItem('itemscount',cartItemsCount)
      sessionStorage.setItem('date',date.toString())
      sessionStorage.setItem('datedelivery',datedelivery.toString())
      sessionStorage.setItem('total',calculatePrice())
      sessionStorage.setItem('discount',calculateDiscount())
      sessionStorage.setItem('subtotal',calculateSubTotalPrice()) 
      await add_order() // backend
      console.log('viajando a la orden recibida')
      clearCart();
      Router.push('/order-received');
      
    }
    setLoading(false);
  };

  const add_order = async () => {
 
      
    console.log('ingreando add_order 2')
    await addOrder({
      variables: {
                clientid: config().SUBSCRIPTION_ID,
                cliente: 1,
                total: calculatePrice(), 
                subtotal: calculateSubTotalPrice(), 
                metodo_pago: 'card', 
                order: sessionStorage.getItem('order').toString(), 
                items: JSON.stringify(items),
                itemcount: cartItemsCount,
                discount: calculateDiscount(),
                delivery_date: sessionStorage.getItem('datedelivery'),
                order_date: sessionStorage.getItem('date'),
                delivery_address: sessionStorage.getItem('address'),
                contacto: sessionStorage.getItem('contact'),
                status: 'Procesando',
                received: true,
                estado: 'Normal'
                }
    });
    console.log('ingreando add_order termino satisfactoriamente')

  }

  const existeOrden = async () => {

   
    if(data) {
      if( data.pedido && data.pedido.length > 0) {
        return true;
      } else {
        return false;
      }
    }
    return false;

  }

 

  useEffect(() => {
    console.log('!existeOrden() :', !existeOrden() )
    console.log('calculatePrice() > 0 :', calculatePrice() > 0 )
    console.log('cartItemsCount > 0 :', cartItemsCount > 0 )
    return () => {
      if (isRestaurant) {
        toggleRestaurant();
        clearCart();
      }
     
    };
  }, []);

  return (
    
    <form>
      <br/>
      <br/>
      <br/>
      <CheckoutWrapper>
        <CheckoutContainer>
          <CheckoutInformation>
             
            <InformationBox>
              <Address
                address={clienteData.addresses}
                increment={true}
                flexStart={true}
                buttonProps={{
                  variant: 'text',
                  type: 'button',
                  className: 'addButton',
                }}
                icon={true}
              />
            </InformationBox>
              
            
          {/*   <InformationBox>
              <DeliverySchedule>
                <Schedules increment={true} />
              </DeliverySchedule>
            </InformationBox>
 */}
         
            <InformationBox>
              <Contact
                contacts={clienteData.contacts}
                increment={true}
                flexStart={true}
                buttonProps={{
                  variant: 'text',
                  type: 'button',
                  className: 'addButton',
                }}
                icon={true}
              />
            </InformationBox>
           
 
            <InformationBox
              className='paymentBox'
              style={{ paddingBottom: 30 }}
            >
             {/*    
              <Payment increment={true} deviceType={deviceType} />
 */}
              
              {coupon ? (
                <CouponBoxWrapper>
                  <CouponCode>
                    <FormattedMessage id='couponApplied' />
                    <span>{coupon.code}</span>

                    <RemoveCoupon
                      onClick={(e) => {
                        e.preventDefault();
                        removeCoupon();
                        setHasCoupon(false);
                      }}
                    >
                      <FormattedMessage id='removeCoupon' />
                    </RemoveCoupon>
                  </CouponCode>
                </CouponBoxWrapper>
              ) : (
                <CouponBoxWrapper>
                  {!hasCoupon ? (
                    <HaveCoupon onClick={() => setHasCoupon((prev) => !prev)}>
                      <FormattedMessage
                        id='specialCode'
                        defaultMessage='Tienes un código especial?'
                      />
                    </HaveCoupon>
                  ) : (
                    <CouponInputBox>
                      <Coupon errorMsgFixed={true} className='normalCoupon' />
                    </CouponInputBox>
                  )}
                </CouponBoxWrapper>
              )}
         

              <TermConditionText>
                <FormattedMessage
                  id='termAndConditionHelper'
                  defaultMessage='By making this purchase you agree to our'
                />
                <Link href='#'>
                  <TermConditionLink>
                    <FormattedMessage
                      id='termAndCondition'
                      defaultMessage='Términos y Condiciones.'
                    />
                  </TermConditionLink>
                </Link>
              </TermConditionText>
           
            
              <CheckoutSubmit>
                <Button
                  type='button'
                  onClick={handleSubmit}
                 /*  disabled={!isValid} */
                  size='big'
                  loading={loading}
                  style={{ width: '100%' }}
                >
                  <FormattedMessage
                    id='processCheckout'
                    defaultMessage='Procesar Checkout'
                  />
                </Button>
              </CheckoutSubmit>
            </InformationBox> 
          </CheckoutInformation> 

          <CartWrapper>
            <Sticky
              enabled={size.width >= 768 ? true : false}
              top={120}
              innerZ={999}
            >
              <OrderInfo>
                <Title>
                  <FormattedMessage
                    id='cartTitle'
                    defaultMessage='Su Pedido'
                  />
                </Title>

                <Scrollbar className='checkout-scrollbar'>
                  <ItemsWrapper>
                    {cartItemsCount > 0 ? (
                      items.map((item) => (
                        <OrderItem key={`cartItem-${item.id}`} product={item} />
                      ))
                    ) : (
                      <>
                        <NoProductImg>
                          <NoCartBag />
                        </NoProductImg>

                        <NoProductMsg>
                          <FormattedMessage
                            id='noProductFound'
                            defaultMessage='No hay productos encontrados'
                          />
                        </NoProductMsg>
                      </>
                    )}
                  </ItemsWrapper>
                </Scrollbar>

                 <CalculationWrapper>
                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='subTotal'
                        defaultMessage='Sub Total'
                      />
                    </Text>
                    <Text>
                      {CURRENCY}
                      {calculateSubTotalPrice()}
                    </Text>
                  </TextWrapper>

                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='intlOrderDetailsDelivery'
                        defaultMessage='Delivery Fee'
                      />
                    </Text>
                    <Text>{CURRENCY}0</Text>
                  </TextWrapper>

                  <TextWrapper>
                    <Text>
                      <FormattedMessage
                        id='discountText'
                        defaultMessage='Descuento'
                      />
                    </Text>
                    <Text>
                      {CURRENCY}
                      {calculateDiscount()}
                    </Text>
                  </TextWrapper>

                  <TextWrapper style={{ marginTop: 20 }}>
                    <Bold>
                      <FormattedMessage id='totalText' defaultMessage='Total' />{' '}
                      <Small>
                        (
                        <FormattedMessage
                          id='vatText'
                          defaultMessage='Incl. VAT'
                        />
                        )
                      </Small>
                    </Bold>
                    <Bold>
                      {CURRENCY}
                      {calculatePrice()}
                    </Bold>
                  </TextWrapper>
                </CalculationWrapper> 
              </OrderInfo>
            </Sticky>
          </CartWrapper>
        </CheckoutContainer>
      </CheckoutWrapper>
    </form>
  );
};

export default CheckoutWithSidebar;
