import React, { useState } from 'react';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Modal } from '@redq/reuse-modal';
import Carousel from 'components/carousel/carousel';
import { Banner } from 'components/banner/banner'; 
import { HorizontalCategoryCardMenu } from 'layouts/horizontal-category-menu/horizontal-category-card-menu';
import {
  MainContentArea, 
  ContentSection,
  OfferSection,
  MobileCarouselDropdown,
} from 'assets/styles/pages.style'; 
import { siteOffers } from 'site-settings/site-offers';
import { sitePages } from 'site-settings/site-pages';
import { SEO } from 'components/seo';
import { useRefScroll } from 'utils/use-ref-scroll';
import { initializeApollo } from 'utils/apollo';
import { GET_PRODUCTS } from 'graphql/query/products.query';
import { GET_CATEGORIES } from 'graphql/query/category.query';
import { ModalProvider } from 'contexts/modal/modal.provider';
import { useQuery } from '@apollo/client';
import { GET_INFO_SHOP } from 'utils/graphql/query/infoshop.query'; 
import Cookies  from 'universal-cookie'; 
import { MobileBanner } from 'components/banner/mobile-banner';

const cookie = new Cookies()
const Sidebar = dynamic(() => import('layouts/sidebar/sidebar'));
const Products = dynamic(() =>
  import('components/product-grid/product-list/product-list')
);
const CartPopUp = dynamic(() => import('features/carts/cart-popup'), {
  ssr: false,
});

const CategoryPage: React.FC<any> = ({ deviceType }) => {
 
  const [cid, setCid] = useState('')
  const { query } = useRouter();
  const { elRef: targetRef, scroll } = useRefScroll({
    percentOfElement: 0,
    percentOfContainer: 0,
    offsetPX: -110,
  });

  var { data, error, refetch, fetchMore } = useQuery(GET_INFO_SHOP,
    {
        variables: {
          clientid: cid

        }
    }); 
  
 
  React.useEffect(() => {

    setCid(cookie.get('clientid'))

    if (query.text || query.category) {
      scroll();
    }
  }, [cid, query.text, query.category]);
  const PAGE_TYPE: any = query.type;
  const page = sitePages[PAGE_TYPE];


   
  return (
    <>
       <SEO title={data && data.suscripciones.length > 0 && data.suscripciones[0].titulo} 
            description={data && data.suscripciones.length > 0 && data.suscripciones[0].descripcion + ' - Detalle'}
            nombre={data && data.suscripciones.length > 0 && data.suscripciones[0].nombre } 
            tags={data && data.suscripciones.length > 0 && data.suscripciones[0].tags } 
            />
      <ModalProvider>
        <Modal>
         <MobileBanner intlTitleId={page?.banner_title_id} type={PAGE_TYPE} imageUrl={data && data.suscripciones.length > 0 && data.suscripciones[0].shop_image_body}   /> 
          <Banner
            intlTitleId={page?.banner_title_id}
            intlDescriptionId={page?.banner_description_id}
            imageUrl={data && data.suscripciones.length > 0 && data.suscripciones[0].shop_image_body}  
          />
          {/* <OfferSection>
            <div style={{ margin: '0 -10px' }}>
              <Carousel deviceType={deviceType} data={siteOffers} />
            </div>
          </OfferSection> */}
          <MobileCarouselDropdown>
          {/*   <Sidebar type={PAGE_TYPE} deviceType={deviceType} /> */}
          </MobileCarouselDropdown>
          <MainContentArea>
            <ContentSection>
              <div ref={targetRef}>
              <HorizontalCategoryCardMenu type={PAGE_TYPE} />       
                <Products
                  type={PAGE_TYPE}
                  deviceType={deviceType}
                  fetchLimit={20} 
                />
              </div>
            </ContentSection>
          </MainContentArea>
          <CartPopUp deviceType={deviceType} />
        </Modal>
      </ModalProvider>
    </>
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_PRODUCTS,
    variables: {
      type: params.type,
      offset: 0,
      limit: 20,
    },
  });
  await apolloClient.query({
    query: GET_CATEGORIES,
    variables: {
      type: params.type,
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { type: 'grocery' } },
      { params: { type: 'makeup' } },
      { params: { type: 'bags' } },
      { params: { type: 'book' } },
      { params: { type: 'medicine' } },
      { params: { type: 'furniture' } },
      { params: { type: 'clothing' } },
    ],
    fallback: false,
  };
}
export default CategoryPage;
