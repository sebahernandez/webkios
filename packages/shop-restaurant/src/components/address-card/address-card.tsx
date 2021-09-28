import React, { useContext } from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { closeModal } from '@redq/reuse-modal';
import TextField from 'components/forms/text-field';
import { Button } from 'components/button/button';
import { useMutation } from '@apollo/client'; 
import { FieldWrapper, Heading } from './address-card.style';
import { ProfileContext } from 'contexts/profile/profile.context';
import { FormattedMessage } from 'react-intl';
import { UPDATE_ADDRESS } from 'utils/graphql/mutation/address';
import { INSERT_ADDRESS } from 'utils/graphql/mutation/address';
import config from 'setting/config';
import Cookies  from 'universal-cookie';

// Shape of form values
interface FormValues {
  id?: number | null;
  name?: string;
  info?: string;
}

// The type of props MyForm receives
interface MyFormProps {
  item?: any | null;
}
const cookie = new Cookies()
// Wrap our form with the using withFormik HoC
const FormEnhancer = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: (props) => {
    return {
      id: props.item.id || null,
      name: props.item.name || '',
      info: props.item.info || '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('El Título es un dato requerido!'),
    info: Yup.string().required('La Dirección es Requerida'),
  }),
  handleSubmit: (values) => {
 
    // do submitting things
  },
});

const UpdateAddress = (props: FormikProps<FormValues> & MyFormProps) => {
  const {
    isValid,
    item,
    values,
    touched,
    errors,
    dirty,
    handleChange,
    handleBlur, 
    handleReset,
    isSubmitting,
  } = props;
  const addressValue = {
    id: values.id,
    type: 'secondary',
    name: values.name,
    info: values.info,
  }; 
  const { state, dispatch } = useContext(ProfileContext);

  const [addressMutation, { data }] = useMutation(UPDATE_ADDRESS);

  const [addressInsertMutation] = useMutation(INSERT_ADDRESS); 

  const handleSubmit = async () => {
    
    if (isValid && item === 'add-address-modal') { 
      const addressData = await addressInsertMutation({
          variables: { 
            "name": values.name,
            "info": values.info,
            "type": "secondary",
            "cliente": cookie.get('customer').id,
            "clientid": config().SUBSCRIPTION_ID
          },
      });  
      closeModal();
    }else {
      if (isValid) { 
        const addressData = await addressMutation({
            variables: { 
              "id": values.id,
              "name": values.name,
              "info": values.info,  
              "type": item.type,
              "cliente": cookie.get('customer').id,
              "clientid": config().SUBSCRIPTION_ID
            },
        }); 
           /* dispatch({ type: 'ADD_OR_UPDATE_ADDRESS', payload: addressValue });  */
        closeModal();
      }
    }



  };
  return (
    <Form>
      <Heading>{item && item.id ? 'Editar Dirección' : 'Agregar Nueva Dirección'}</Heading>
      <FieldWrapper>
        <TextField
          id="name"
          type="text"
          placeholder="Ingresa Titulo"
          error={touched.name && errors.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>

      <FieldWrapper>
        <TextField
          id="info"
          as="textarea"
          placeholder="Ingrese su Dirección"
          error={touched.info && errors.info}
          value={values.info}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FieldWrapper>

      <Button
        onClick={handleSubmit}
        type="submit"
        style={{ width: '100%', height: '44px' }}
      >
        <FormattedMessage id="savedAddressId" defaultMessage="Guardar" />
      </Button>
    </Form>
  );
};

export default FormEnhancer(UpdateAddress);
