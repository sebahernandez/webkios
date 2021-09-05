import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import RadioGroup from 'components/radio-group/radio-group';
import RadioCard from 'components/radio-card/radio-card';
import { Button } from 'components/button/button';
import UpdateAddress from 'components/address-card/address-card';
import { handleModal } from 'features/checkouts/checkout-modal';
import { ProfileContext } from 'contexts/profile/profile.context';
import { useMutation } from '@apollo/client';
import { INSERT_ADDRESS } from 'utils/graphql/mutation/address';
import { DELETE_ADDRESS } from 'utils/graphql/mutation/address';
import { CardHeader } from 'components/card-header/card-header';
import { ButtonGroup } from 'components/button-group/button-group';
import { Box } from 'components/box';
import { Plus } from 'assets/icons/PlusMinus';
import { useEffect } from 'react';

interface Props {
  increment?: boolean;
  icon?: boolean;
  buttonProps?: any;
  flexStart?: boolean;
  address?: any;
}

const Address = ({
  increment = false, 
  address,
  flexStart = false,
  buttonProps = {
    size: 'big',
    variant: 'outlined',
    type: 'button',
    className: 'add-button',
  },
  icon = false,
}: Props) => {
  const [deleteAddressMutation] = useMutation(DELETE_ADDRESS);

   const {
    state: { 
      address2
     },
    dispatch,
  } = useContext(ProfileContext); 

  const handleOnDelete = async (item) => {
    dispatch({ type: 'DELETE_ADDRESS', payload: item.id });
    /* return await deleteAddressMutation({
      variables: { addressId: JSON.stringify(item.id) },
    }); */
  };

  useEffect(() => 
  {
    console.log('direccion de origen:', address)
  })

 
  return (
    <>
      <CardHeader increment={increment}>
        <FormattedMessage
          id='checkoutDeliveryAddress'
          defaultMessage='Selecciona tu dirección de Entrega'
        />
      </CardHeader>
      <ButtonGroup flexStart={flexStart}>
        <RadioGroup
          items={address}
          component={(item: any) => (
            <RadioCard
              id={item.id}
              key={item.id}
              title={item.name}
              content={item.info}
              name='address'
              checked={item.type === 'primary'}
              onChange={() =>
                dispatch({
                  type: 'SET_PRIMARY_ADDRESS',
                  payload: item.id.toString(),
                })
              }
              onEdit={() => handleModal(UpdateAddress, item)}
              onDelete={() => handleOnDelete(item)}
            />
          )}
          secondaryComponent={
            <Button
              {...buttonProps}
              onClick={() => handleModal(UpdateAddress, 'add-address-modal')}
            >
              {icon && (
                <Box mr={2}>
                  <Plus width='10px' />
                </Box>
              )}
              <FormattedMessage
                id='addAddressBtn'
                defaultMessage='Agrega tu Dirección de Entrega'
              />
            </Button>
          }
        />
      </ButtonGroup>
    </>
  );
};
export default Address;
