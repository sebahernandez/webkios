import React from 'react';
import {
  SingleOrderList,
  OrderListHeader,
  TrackID,
  Status,
  OrderMeta,
  Meta,
} from './order-card.style';
import { FormattedMessage } from 'react-intl';

import { CURRENCY } from 'utils/constant'; 
import Cookies  from 'universal-cookie';

type OrderCardProps = {
  orderId?: any;
  onClick?: (e: any) => void;
  className?: any;
  status?: any;
  date?: any;
  deliveryTime?: any;
  amount?: number;
};

const OrderCard: React.FC<OrderCardProps> = ({
  orderId,
  onClick,
  className,
  status,
  date,
  deliveryTime,
  amount,
}) => {
  const cookie = new Cookies()
  return (
    <>
      <SingleOrderList onClick={onClick} className={className}>
        <OrderListHeader>
          <TrackID>
            <FormattedMessage
              id="intlOrderCardTitleText"
              defaultMessage="Order"
            />
            <span>#{orderId}</span>
          </TrackID>
          <Status>{status}</Status>
        </OrderListHeader>

        <OrderMeta>
        <Meta>
            <FormattedMessage
              id="customerlabel"
              defaultMessage="Cliente"
            />
            : <span>{cookie.get('user_logged') && cookie.get('user_logged').name}</span>
          </Meta>
          <Meta>
            <FormattedMessage
              id="intlOrderCardDateText"
              defaultMessage="Order Date"
            />
            : <span>{date}</span>
          </Meta>
          <Meta>
            <FormattedMessage
              id="deliveryTimeText"
              defaultMessage="Delivery Time"
            />
            : <span>{deliveryTime}</span>
          </Meta>
          <Meta className="price">
            <FormattedMessage
              id="intlOrderCardTotalText"
              defaultMessage="Total Price"
            />
            :
            <span>
              {CURRENCY}
              {amount}
            </span>
          </Meta>
        </OrderMeta>
      </SingleOrderList>
    </>
  );
};

export default OrderCard;
