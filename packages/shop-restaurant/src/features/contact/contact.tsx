import React, { useContext } from 'react';
import { FormattedMessage } from 'react-intl';
import RadioGroup from 'components/radio-group/radio-group';
import RadioCard from 'components/radio-card/radio-card';
import { Button } from 'components/button/button';
import { closeModal } from '@redq/reuse-modal';
import { handleModal } from 'features/checkouts/checkout-modal';
import { ProfileContext } from 'contexts/profile/profile.context';
import CreateOrUpdateContact from 'components/contact-card/contact-card';
import { useMutation } from '@apollo/client';
import { DELETE_CONTACT } from 'utils/graphql/mutation/contact'; 
import { CardHeader } from 'components/card-header/card-header';
import { ButtonGroup } from 'components/button-group/button-group';
import { Box } from 'components/box';
import { Plus } from 'assets/icons/PlusMinus';
import config from 'setting/config';
import Cookies  from 'universal-cookie';

interface Props {
  increment?: boolean;
  flexStart?: boolean;
  icon?: boolean;
  buttonProps?: any;
  contacts?: any;
}

const Contact = ({
  increment = false,
  contacts,
  flexStart = false,
  icon = false,
  buttonProps = {
    size: 'big',
    variant: 'outlined',
    type: 'button',
    className: 'add-button',
  },
}: Props) => {
  const [deleteContactMutation] = useMutation(DELETE_CONTACT);

  const {
    state: { contact2 },
    dispatch,
  } = useContext(ProfileContext);

  const cookie = new Cookies()

  const handleOnDelete = async (item) => { 
 
    return await deleteContactMutation({
      variables: { 
        id: JSON.stringify(item.id),
        cliente: cookie.get('customer'),
        clientid: config().SUBSCRIPTION_ID
      },
    });

  };
  return (
    <>
      <CardHeader increment={increment}>
        <FormattedMessage
          id='contactNumberText'
          defaultMessage='Seleccionar su número de Contacto'
        />
      </CardHeader>
      <ButtonGroup flexStart={flexStart}>
        <RadioGroup
          items={contacts}
          component={(item: any) => (
            <RadioCard
              id={item.id}
              key={item.id}
              title={item.type}
              content={item.number}
              checked={item.type === 'primary'}
              onChange={() =>
                dispatch({
                  type: 'SET_PRIMARY_CONTACT',
                  payload: item.id.toString(),
                })
              }
              name='contact'
              onEdit={() => handleModal(CreateOrUpdateContact, item)}
              onDelete={() => handleOnDelete(item)}
            />
          )}
          secondaryComponent={
            <Button
              {...buttonProps}
              onClick={() =>
                handleModal(CreateOrUpdateContact, 'add-contact-modal')
              }
            >
              {icon && (
                <Box mr={2}>
                  <Plus width='10px' />
                </Box>
              )}
              <FormattedMessage
                id='addContactBtn'
                defaultMessage='Agregar Número'
              />
            </Button>
          }
        />
      </ButtonGroup>
    </>
  );
};

export default Contact;
