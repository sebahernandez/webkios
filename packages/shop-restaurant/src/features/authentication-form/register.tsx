import React, { useContext } from 'react';
import Link from 'next/link';
import { Input } from 'components/forms/input';
import { gql } from '@apollo/client';
import {
  Button,
  IconWrapper,
  Wrapper,
  Container,
  LogoWrapper,
  Heading,
  SubHeading,
  HelperText,
  Offer,
  // Input,
  Divider,
  LinkButton,
} from './authentication-form.style';
import { Facebook } from 'assets/icons/facebook';
import { Google } from 'assets/icons/google';
import { AuthContext } from 'contexts/auth/auth.context';
import { FormattedMessage, useIntl } from 'react-intl';
import { useQuery,useMutation, NetworkStatus } from '@apollo/client';
import { GET_CLIENTE_USERNAME } from '../../utils/graphql/query/clients.query';
import { ADD_CLIENTE } from '../../utils/graphql/mutation/register_client';


export default function SignOutModal({cid}) {
  const intl = useIntl();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { authDispatch } = useContext<any>(AuthContext);
  const [addCliente,error] = useMutation(ADD_CLIENTE );
  const { data, loading } =  useQuery(
    GET_CLIENTE_USERNAME,
    {
      variables: {
        clientid: cid,
        username: email
      } 
    }
  );

  const toggleSignInForm = () => {
    authDispatch({
      type: 'SIGNIN',
    });
  };

  const handleSubmit = async () => {
    
    
    if(data && data.cliente.length > 0){
      console.log('usuario YA existe')
      alert('usuario YA existe')
    } else {
      console.log('usuario NO existe')
      await addCliente({
        variables: {
                  password: password, 
                  username: email, 
                  clientid: cid
                }
      });
      if(error){
        console.log('hubo un error', error)
      } 

      
         alert('grabo exitosamente')
        
        authDispatch({
            type: 'SIGNIN',
          });
      
        

    } 
     
  }

  return (
    <Wrapper>
      <Container>
        <Heading>
          <FormattedMessage id='signUpBtnText' defaultMessage='Sign Up' />
        </Heading>
        <SubHeading>
          <FormattedMessage
            id='signUpText'
            defaultMessage='Every fill is required in sign up'
          />
        </SubHeading>
      
         {/*  ingreso de direccion */}
        <Input
          type='email'
          placeholder={intl.formatMessage({
            id: 'emailAddressPlaceholder',
            defaultMessage: 'Dirección de correo electrónico o Teléfono de contacto',
          })}
          onChange={(e) => setEmail(e.target.value)}
          required
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
         {/*  ingreso de password */}
        <Input
          type='password'
          placeholder={intl.formatMessage({
            id: 'passwordPlaceholder',
            defaultMessage: 'Password (min 6 characters)',
          })}
          onChange={(e) => setPassword(e.target.value)}
          required        
          height='48px'
          backgroundColor='#F7F7F7'
          mb='10px'
        />
        <HelperText style={{ padding: '20px 0 30px' }}>
          <FormattedMessage
            id='signUpText'
            defaultMessage="By signing up, you agree to Pickbazar's"
          />
          &nbsp;
          <Link href='/'>
            <a>
              <FormattedMessage
                id='termsConditionText'
                defaultMessage='Terms &amp; Condition'
              />
            </a>
          </Link>
        </HelperText>
        <Button variant='primary' size='big' width='100%'  onClick={handleSubmit} type='submit'>
          <FormattedMessage id='continueBtn' defaultMessage='Continue' />
        </Button>
        <Divider>
          <span>
            <FormattedMessage id='orText' defaultMessage='or' />
          </span>
        </Divider>
        <Button
          variant='primary'
          size='big'
          style={{
            width: '100%',
            backgroundColor: '#4267b2',
            marginBottom: 10,
          }}
        >
          <IconWrapper>
            <Facebook />
          </IconWrapper>
          <FormattedMessage
            id='continueFacebookBtn'
            defaultMessage='Continue with Facebook'
          />
        </Button>
        <Button
          variant='primary'
          size='big'
          style={{ width: '100%', backgroundColor: '#4285f4' }}
        >
          <IconWrapper>
            <Google />
          </IconWrapper>
          <FormattedMessage
            id='continueGoogleBtn'
            defaultMessage='Continue with Google'
          />
        </Button>
        <Offer style={{ padding: '20px 0' }}>
          <FormattedMessage
            id='alreadyHaveAccount'
            defaultMessage='Already have an account?'
          />{' '}
          <LinkButton onClick={toggleSignInForm}>
            <FormattedMessage id='loginBtnText' defaultMessage='Login' />
          </LinkButton>
        </Offer>
      </Container>
    </Wrapper>
  );
}
