import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useQuery, gql } from '@apollo/client';
import { SEO } from 'components/seo';
import CartPopUp from 'features/carts/cart-popup';
import { Modal } from '@redq/reuse-modal'; 
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query';
import Cookies  from 'universal-cookie';
import {
  OfferPageWrapper,
  ProductsRow,
  MainContentArea,
  ProductsCol,
} from 'assets/styles/pages.style';
import GiftCard from 'components/gift-card/gift-card';
import Footer from 'layouts/footer';
import { initializeApollo } from 'utils/apollo';
import dynamic from 'next/dynamic';
const ErrorMessage = dynamic(() =>
  import('components/error-message/error-message')
);

const GET_COUPON = gql`
  query cupon($clientid: String!) {
    cupon(where: {clientid: {_eq: $clientid}}) {
      id
      image
      code
      estado
      creacion
      discount
    }
  }
`;
type GiftCardProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};
const cookie = new Cookies()
const cid = cookie.get('clientid')

const GiftCardPage: NextPage<GiftCardProps> = ({ deviceType }) => {
  const { data, error } = useQuery(GET_COUPON,
    {
      variables: {
        clientid: cid
      }
    });
    var { data:data1,   } = useQuery(GET_INFO_SHOP,
      {
          variables: {
            clientid: cid
  
          }
      });     
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Modal>
      <SEO title={"Cupones - " + (data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].titulo)} 
       description={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].descripcion)}
       nombre={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].nombre)}
       tags={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 &&  data.suscripciones[0].tags)}  
       canonical={(data !== undefined && data.suscripciones !== undefined && data.suscripciones.length > 0 && (data.suscripciones[0].canonical))}  
      />  
      <OfferPageWrapper>
        <MainContentArea>
          <div style={{ width: '100%' }}>
            <ProductsRow>
              {data && data.cupon
                ? data.cupon.map((coupon) => (
                    <ProductsCol key={coupon.code}>
                      <GiftCard image={coupon.image} code={coupon.code} />
                    </ProductsCol>
                  ))
                : null}
            </ProductsRow>
          </div>
        </MainContentArea>

         
      </OfferPageWrapper>
      <CartPopUp deviceType={deviceType} />
    </Modal>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_COUPON,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
export default GiftCardPage;
