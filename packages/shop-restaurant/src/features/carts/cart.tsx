import React,  { useContext, useState } from 'react';
import Link from 'next/link';
import { openModal } from '@redq/reuse-modal';
import {
  CartPopupBody,
  PopupHeader,
  PopupItemCount,
  CloseButton,
  PromoCode,
  CheckoutButtonWrapper,
  CheckoutButton,
  Title,
  PriceBox,
  NoProductMsg,
  NoProductImg,
  ItemWrapper,
  CouponBoxWrapper,
  CouponCode,
} from './cart.style';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { ShoppingBagLarge } from 'assets/icons/ShoppingBagLarge';
import { NoCartBag } from 'assets/icons/NoCartBag';
import { CURRENCY } from 'utils/constant';
import { FormattedMessage } from 'react-intl';
import { useLocale } from 'contexts/language/language.provider';

import { Scrollbar } from 'components/scrollbar/scrollbar';
import { useCart } from 'contexts/cart/use-cart';
import { CartItem } from 'components/cart-item/cart-item';
import Coupon from 'features/coupon/coupon';
import { AuthContext } from 'contexts/auth/auth.context';
import AuthenticationForm from 'features/authentication-form';
import Cookies  from 'universal-cookie';
import { useAppState, useAppDispatch } from 'contexts/app/app.provider';
import { useRouter } from 'next/router';


type CartPropsType = {
  style?: any;
  className?: string;
  scrollbarHeight?: string;
  onCloseBtnClick?: (e: any) => void;
};

const Cart: React.FC<CartPropsType> = ({
  style,
  className,
  onCloseBtnClick,
  scrollbarHeight,
}) => {
  const {
    items,
    coupon,
    addItem,
    removeItem,
    removeItemFromCart,
    cartItemsCount,
    calculatePrice,
  } = useCart();
  const router = useRouter();
  const [hasCoupon, setCoupon] = useState(false);
  const { isRtl } = useLocale();
  const cookie = new Cookies()
  const dispatch = useAppDispatch();
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = useContext<any>(AuthContext);



  
  const signInOutForm = () => {
   
    if (isAuthenticated) {
        router.push('/checkout');
    } else {
          cookie.set('login',2)
          authDispatch({
            type: 'SIGNIN',
          });
          openModal({
            show: true,
            overlayClassName: 'quick-view-overlay',
            closeOnClickOutside: true,
            component: AuthenticationForm,
            closeComponent: '',
            config: {
              enableResizing: false,
              disableDragging: true,
              className: 'quick-view-modal',
              width: 458,
              height: 'auto',
            },
          });
          
    }

  };


  return (
    <CartPopupBody className={className} style={style}>
      <PopupHeader>
        <PopupItemCount>
          <ShoppingBagLarge width='19px' height='24px' />
          <span>
            {cartItemsCount}
            &nbsp;
            {cartItemsCount > 1 ? (
              <FormattedMessage id='cartItems' defaultMessage='items' />
            ) : (
              <FormattedMessage id='cartItem' defaultMessage='item' />
            )}
          </span>
        </PopupItemCount>

        <CloseButton onClick={onCloseBtnClick}>
          <CloseIcon />
        </CloseButton>
      </PopupHeader>

      <Scrollbar className='cart-scrollbar'>
        <ItemWrapper className='items-wrapper'>
          {!!cartItemsCount ? (
            items.map((item) => (
              <CartItem
                key={`cartItem-${item.id}`}
                onIncrement={() => addItem(item)}
                onDecrement={() => removeItem(item)}
                onRemove={() => removeItemFromCart(item)}
                data={item}
              />
            ))
          ) : (
            <>
              <NoProductImg>
                <NoCartBag />
              </NoProductImg>
              <NoProductMsg>
                <FormattedMessage
                  id='noProductFound'
                  defaultMessage='No existen productos encontrados'
                />
              </NoProductMsg>
            </>
          )}
        </ItemWrapper>
      </Scrollbar>

      <CheckoutButtonWrapper>
        <PromoCode>
          {!coupon?.discountInPercent ? (
            <>
              {!hasCoupon ? (
                <button onClick={() => setCoupon((prev) => !prev)}>
                  <FormattedMessage
                    id='specialCode'
                    defaultMessage='Have a special code?'
                  />
                </button>
              ) : (
                <CouponBoxWrapper>
                  <Coupon
                    disabled={!items.length}
                    style={{
                      boxShadow: '0 3px 6px rgba(0, 0, 0, 0.06)',
                    }}
                  />
                </CouponBoxWrapper>
              )}
            </>
          ) : (
            <CouponCode>
              <FormattedMessage
                id='couponApplied'
                defaultMessage='Coupon Applied'
              />
              <span>{coupon.code}</span>
            </CouponCode>
          )}
        </PromoCode>

        {cartItemsCount !== 0 ? (
         /*  <Link href='/checkout'> */
            <CheckoutButton onClick={signInOutForm}>
              <>
                <Title>
                  <FormattedMessage
                    id='nav.checkout'
                    defaultMessage='Checkout'
                  />
                </Title>
                <PriceBox>
                  {CURRENCY}
                  {calculatePrice()}
                </PriceBox>
              </>
            </CheckoutButton>
          /* </Link> */
        ) : (
          <CheckoutButton>
            <>
              <Title>
                <FormattedMessage id='nav.checkout' defaultMessage='Checkout' />
              </Title>
              <PriceBox>
                {CURRENCY}
                {calculatePrice()}
              </PriceBox>
            </>
          </CheckoutButton>
        )}
      </CheckoutButtonWrapper>
    </CartPopupBody>
  );
};

export default Cart;
