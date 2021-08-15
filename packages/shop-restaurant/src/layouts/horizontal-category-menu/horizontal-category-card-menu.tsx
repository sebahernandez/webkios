import React from 'react';
import { GET_CATEGORIAS } from 'utils/graphql/query/categorias.query';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import ErrorMessage from 'components/error-message/error-message';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Text } from 'components/text';
import Image from 'components/image/image';
import { ArrowNext } from 'assets/icons/ArrowNext';
import { ArrowPrev } from 'assets/icons/ArrowPrev';
import {
  CategoryWrapper,
  CategoryInner,
  ItemCard,
  ImageWrapper,
  Title,
  SliderNav,
} from './horizontal-category-card-menu.style';
import config from '../../setting/config';

SwiperCore.use([Navigation]);

interface Props {
  type: string;
}

export const HorizontalCategoryCardMenu = ({ type }: Props) => {
  const router = useRouter();
  const cid =  config().SUBSCRIPTION_ID;
  const { data, loading, error } = useQuery(GET_CATEGORIAS, {
    variables: { 
        clientid: cid
     },
  });
  if (error) return <ErrorMessage message={error.message} />;
  if (loading) return <p>Loading...</p>;
  if (!data) return null;
  const { pathname, query } = router;
  const selectedQueries = query.category;

  const onCategoryClick = (slug: string) => {
    router.push({
      pathname,
      query: { ...query, category: slug },
    });
  };

  const breakpoints = {
    320: {
      slidesPerView: 2,
    },

    440: {
      slidesPerView: 3,
    },

    620: {
      slidesPerView: 4,
    },

    820: {
      slidesPerView: 5,
    },

    1100: {
      slidesPerView: 6,
    },

    1280: {
      slidesPerView: 7,
    },
  };

  return (
    <CategoryWrapper>
      <CategoryInner>
        <Swiper
          id='category-card-menu'
          navigation={{
            nextEl: '.banner-slider-next',
            prevEl: '.banner-slider-prev',
          }}
          breakpoints={breakpoints}
          slidesPerView={7}
          spaceBetween={10}
        >
          {data.categorias_view_cid.map((category, idx) => (
            <SwiperSlide key={idx}>
              <ItemCard
                role='button'
                onClick={() => onCategoryClick(category.name)}
                active={selectedQueries === category.name}
              >
                <ImageWrapper></ImageWrapper>
                <Title>{category.name}</Title>
              </ItemCard>
            </SwiperSlide>
          ))}
        </Swiper>
        <SliderNav className='banner-slider-next'>
          <ArrowNext />
        </SliderNav>
        <SliderNav className='banner-slider-prev'>
          <ArrowPrev />
        </SliderNav>
      </CategoryInner>
    </CategoryWrapper>
  );
};
