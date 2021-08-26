import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { useQuery, gql } from '@apollo/client';
import { SEO } from 'components/seo';
import CartPopUp from 'features/carts/cart-popup';
import { Modal } from '@redq/reuse-modal';
import config from 'setting/config';
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query';

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
const cid = config().SUBSCRIPTION_ID;
const GiftCardPage: NextPage<GiftCardProps> = ({ deviceType }) => {
  const { data, error } = useQuery(GET_COUPON,
    {
      variables: {
        clientid: config().SUBSCRIPTION_ID
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
      <SEO title={data1 && data1.info_shop_view[0].site_name} description={data1 && data1.info_shop_view[0].description + ' - Detalle'} />      
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
