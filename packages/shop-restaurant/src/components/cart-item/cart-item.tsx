import React from 'react';
import { Counter } from 'components/counter/counter';
import { CloseIcon } from 'assets/icons/CloseIcon';
import { CURRENCY } from 'utils/constant';
import {
  ItemBox,
  Image,
  Information,
  Name,
  Price,
  Weight,
  Total,
  RemoveButton,
} from './cart-item.style';

interface Props {
  data: any;
  onDecrement: () => void;
  onIncrement: () => void;
  onRemove: () => void;
}

export const CartItem: React.FC<Props> = ({
  data,
  onDecrement,
  onIncrement,
  onRemove,
}) => {
  const { nombre, gallery, precio, precio_venta, unit, quantity } = data;
  const displayPrice = precio_venta ? precio_venta : precio;
  
  return (
    <ItemBox>
      <Counter
        value={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        variant="lightVertical"
      />
      <Image src={gallery.split(',')[0]} />
      <Information>
        <Name>{nombre}</Name>
        <Price>
          {CURRENCY}
          {displayPrice}
        </Price>
        <Weight>
          {quantity} X {unit}
        </Weight>
      </Information>
      <Total>
        {CURRENCY}
        {(quantity * displayPrice).toFixed(0)}
      </Total>
      <RemoveButton onClick={onRemove}>
        <CloseIcon />
      </RemoveButton>
    </ItemBox>
  );
};
