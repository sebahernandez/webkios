import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import { handleModal } from 'features/checkouts/checkout-modal';
import { ProfileContext } from 'contexts/profile/profile.context';
import PaymentGroup from 'components/payment-group/payment-group';
import StripePaymentForm from './stripe-form';
import { useCart } from 'contexts/cart/use-cart';
import { useMutation } from '@apollo/client';
import { DELETE_CARD } from 'graphql/mutation/card';
import { CardHeader } from 'components/card-header/card-header';
const mercadopago = require ('mercadopago');

interface Props {
  deviceType: any;
  increment?: boolean;
}

const Payment = ({ deviceType, increment = false }: Props) => {
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);
  const { calculatePrice } = useCart();

  // SDK de Mercado Pago
  
  // Agrega credenciales
  mercadopago.configure({
    access_token: 'APP_USR-2672568876104049-082402-83e0b9ceb2e982344cd6dfdfd7b48289-659002112'
  });

 

  // Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};
 


  const {
    state: { card },
    dispatch,
  } = useContext(ProfileContext);

  const handleOnDelete = async (item) => {
    dispatch({ type: 'DELETE_CARD', payload: item.id });
    return await deletePaymentCardMutation({
      variables: { cardId: JSON.stringify(item.id) },
    });
  };
  return (
    <>
      <CardHeader increment={increment}>
        <FormattedMessage
          id="selectPaymentText"
          defaultMessage="Select Payment Option"
        />
      </CardHeader>

      {/* Incorporar Integracion Mercado Pago */}




   {/*    <PaymentGroup
        name="payment"
        deviceType={deviceType}
        items={card}
        onDelete={(item) => handleOnDelete(item)}
        onChange={(item: any) =>
          dispatch({
            type: 'SET_PRIMARY_CARD',
            payload: item.id.toString(),
          })
        }
        handleAddNewCard={() => {
          handleModal(
            StripePaymentForm,
            { totalPrice: calculatePrice() },
            'add-address-modal stripe-modal'
          );
        }}
      /> */}
    </>
  );
};

export default Payment;
