import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import {
  ProductsRow,
  ProductsCol,
  ButtonWrapper,
  LoaderWrapper,
  LoaderItem,
  ProductCardWrapper,
} from './product-list.style';
import { CURRENCY } from 'utils/constant';
import { useQuery, NetworkStatus } from '@apollo/client';
import Placeholder from 'components/placeholder/placeholder';
import Fade from 'react-reveal/Fade';
import NoResultFound from 'components/no-result/no-result';
import { FormattedMessage } from 'react-intl';
import { Button } from 'components/button/loadmore-button';
import config from '../../../setting/config'; 
import { GET_CATEGORIAS } from 'utils/graphql/query/categorias.query';
import { GET_PRODUCTS_X_CATEGORIA } from 'utils/graphql/query/products.query';


const ErrorMessage = dynamic(() =>
  import('components/error-message/error-message')
);

const GeneralCard = dynamic(
  import('components/product-card/product-card-one/product-card-one')
);
 
 

type ProductsProps = {
  deviceType?: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  fetchLimit?: number;
  loadMore?: boolean;
  type?: string; 
};
export const Products: React.FC<ProductsProps> = ({
  deviceType,
  fetchLimit = 40,
  loadMore = true,
  type 
}) => {
  const router = useRouter();
  const cid =  config().SUBSCRIPTION_ID;
  let categoria = "";
  const { query } = useRouter();
 
  let { data:data1, loading:loading1, error:error1 } = useQuery(
    GET_CATEGORIAS,
    {
      variables: {
        clientid: cid, 
      },
      notifyOnNetworkStatusChange: true,
    }
  );
  
  if(data1){ 
    
    categoria = (query.category===undefined?data1.categorias_view_cid[0].name:query.category);    
  }
   
  const { data, error, loading, fetchMore, networkStatus } = useQuery(
    GET_PRODUCTS_X_CATEGORIA,
    {
      variables: {
        clientid: cid,
        categoria: categoria
      },
      notifyOnNetworkStatusChange: true,
    }
  );

 

  const loadingMore = networkStatus === NetworkStatus.fetchMore;

  if (error) return <ErrorMessage message={error.message} />;
  if (loading && !loadingMore) {
    return (
      <LoaderWrapper>
        <LoaderItem>
          <Placeholder uniqueKey="1" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="2" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="3" />
        </LoaderItem>
        <LoaderItem>
          <Placeholder uniqueKey="4" />
        </LoaderItem> 
      </LoaderWrapper>
    );
  }

  if (!data || !data.producto || data.producto.length === 0) {
    return <NoResultFound />;
  }
  const handleLoadMore = () => {
    fetchMore({
      variables: {
        offset: Number(data.producto.length),
        limit: fetchLimit,
      },
    });
  };

  const renderCard = (productType, props) => { 
        return (
          
          <GeneralCard
            title={props.nombre}
            description={props?.descripcion}
            image={props.imageURL}
            categorias={props?.categorias[0]}
            gallery={props.gallery}
            weight={props.unit}
            currency={CURRENCY}
            price={props.precio}
            salePrice={props.precio_venta}
            discountInPercent={props.descuento}
            data={props}
            deviceType={deviceType}
          />
        );
    
  };
  return (
    <>
      <ProductsRow>
        {data.producto.map((item: any, index: number) => (
          <ProductsCol
            key={index}
            style={type === 'book' ? { paddingLeft: 0, paddingRight: 1 } : {}}
          >
            <ProductCardWrapper>
              <Fade
                duration={800}
                delay={index * 10}
                style={{ height: '100%' }}
              >
                {renderCard(type, item)}
              </Fade>
            </ProductCardWrapper>
          </ProductsCol>
        ))}
      </ProductsRow>
      {loadMore && data.producto.hasMore && (
        <ButtonWrapper>
          <Button
            onClick={handleLoadMore}
            loading={loadingMore}
            variant="secondary"
            style={{
              fontSize: 14,
            }}
            border="1px solid #f1f1f1"
          >
            <FormattedMessage id="loadMoreButton" defaultMessage="Cargar Mas" />
          </Button>
        </ButtonWrapper>
      )}
    </>
  );

};

export default Products;
