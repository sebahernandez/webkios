import React, {useEffect} from 'react';
import { NextPage, GetStaticProps } from 'next';
import { Modal } from '@redq/reuse-modal';
import { SEO } from 'components/seo';
import Checkout from 'features/checkouts/checkout-two/checkout-two';
import { ProfileProvider } from 'contexts/profile/profile.provider'; 
import { useQuery, useSubscription } from '@apollo/client'; 
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query';
import { SUBSCRIPTION_CLIENTE_USERNAME } from 'utils/graphql/query/clients.query';
import Cookies  from 'universal-cookie';

type Props = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
 
const data1 = {
  me : {
    id:12,
    name: '',
    email: '',
    address: {
      id:122,
      type:'a',
      name:'aaa',
      info:'asa',
    },
    contact: {
      id: 423,
      type: 'ds',
      number:32423
    },
    card: {
      id:4332,
      type: '323',
      cardType: 'dsdsa',
      name: 'dfsfdrfsafs',
      lastFourDigit: '4234242'
    }
  }
}

const CheckoutPage: NextPage<Props> = ({ deviceType }) => {

  
  const [client, setClient] = React.useState('')
  const cookie = new Cookies()
  const cid = cookie.get('clientid')
  const [email] = React.useState(cookie.get('user_logged') && cookie.get('user_logged').email)

  const { data } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: cid
        }
    }); 

  const { data:data2, error } = useSubscription(SUBSCRIPTION_CLIENTE_USERNAME,
    {
        variables: {  
          clientid: cid,
          username: email
        }
    }); 
    
    useEffect(() => { 
              if(data2){              
                setClient(data2.cliente[0])
                cookie.set('customer',data2.cliente[0])
              }  
    });


 

  // const { data, error, loading } = useQuery(GET_LOGGED_IN_CUSTOMER);
  // if (loading) {
  //   return <div>cargando...</div>;
  // }
  // if (error) return <div>{error.message}</div>;
  const token = 'true';

  return (
    <>
      <SEO title={"Checkout - " + (data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 && data.suscripciones[0].descripcion)} 
       description={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 && (data.suscripciones[0].titulo))}  />
       <ProfileProvider initData={client===null?data1.me:client}>
        <Modal> 
          <Checkout token={token} clienteData={client} deviceType={deviceType} />
        </Modal>
      </ProfileProvider>  
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
//  const apolloClient = initializeApollo();

//  await apolloClient.query({
//    query: GET_LOGGED_IN_CUSTOMER,
//  });

  return {
    props: {
     // initialApolloState: apolloClient.cache.extract(),
    },
  };
}; 
export default CheckoutPage;
