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
import { Autoplay } from 'swiper';

// Estilo al Metodo de Pago

interface Props {
  deviceType: any;
  increment?: boolean;
}

const Payment = ({ deviceType, increment = false }: Props) => {
  const [deletePaymentCardMutation] = useMutation(DELETE_CARD);
  const { calculatePrice } = useCart();
  let image = '/mercadopago.jpg'
  let nombre = 'Mercado Pago'

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
        <div>
          <img width="50%" src={image} alt={nombre} />
       </div>

      
    </>
  );
};

export default Payment;
 
 