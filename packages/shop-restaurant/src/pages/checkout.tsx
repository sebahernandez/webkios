import React, {useEffect} from 'react';
import { NextPage, GetStaticProps } from 'next';
import { Modal } from '@redq/reuse-modal';
import { SEO } from 'components/seo';
import Checkout from 'features/checkouts/checkout-two/checkout-two';
import { ProfileProvider } from 'contexts/profile/profile.provider'; 
import { useQuery, gql } from '@apollo/client';
import config from 'setting/config';
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query';
import { GET_CLIENTE_USERNAME } from 'utils/graphql/query/clients.query';
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
  const [email] = React.useState(cookie.get('user_logged') && cookie.get('user_logged').email)

  const { data } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: config().SUBSCRIPTION_ID
        }
    }); 

  const { data:data2, error, refetch, fetchMore } = useQuery(GET_CLIENTE_USERNAME,
    {
        variables: {
          clientid: config().SUBSCRIPTION_ID,
          username: email
        }
    }); 
    
    useEffect(() => { 
              if(data2){              
                setClient(data2.cliente[0])
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
      <SEO title={"Checkout - " + (data !== undefined && data.info_shop_view !== undefined && data.info_shop_view[0].site_name)} 
       description={(data !== undefined && data.info_shop_view !== undefined && data.info_shop_view[0].description)}  />
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
