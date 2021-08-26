import React from 'react';
import Table from 'rc-table';
import Collapse, { Panel } from 'rc-collapse';
import Progress from 'components/progress-box/progress-box';

import {
  OrderListHeader,
  TrackID,
  Status,
  OrderMeta,
  Meta,
  CardWrapper,
  OrderDetail,
  DeliveryInfo,
  DeliveryAddress,
  Address,
  CostCalculation,
  PriceRow,
  Price,
  ProgressWrapper,
  OrderTable,
  OrderTableMobile,
} from './order-card.style';

import { CURRENCY } from 'utils/constant';

type MobileOrderCardProps = {
  orderId?: any;
  onClick?: (e: any) => void;
  className?: any;
  status?: any;
  date?: any;
  deliveryTime?: any;
  amount?: number;
  tableData?: any;
  columns?: any;
  progressData?: any;
  progressStatus?: any;
  address?: string;
  subtotal?: number;
  discount?: number;
  deliveryFee?: number;
  grandTotal?: number;
  pedido?: any;
};


/*   id: '1',
  status: '2',
  deliveryAddress: 'delivery',
  amount: 'delivery',
  date: 'delivery',
  subtotal: 'delivery',
  deliveryFee: 'delivery',
  discount: 'delivery',
  deliveryTime: 'delivery',
  products: [{
    title: 'titulo1',
    price: 1010,
    total: 2020,
    image: 'img1',
    weight: 2000,
    quantity: 10,
    id: '10',
  }]
 */
const components = {
  table: OrderTable,
};

const OrderCard: React.FC<MobileOrderCardProps> = ({
  onClick,
  className,
  columns,
  progressData,
  pedido,
}) => {
  //   const displayDetail = className === 'active' ? '100%' : '0';
  const addAllClasses: string[] = ['accordion'];

  if (className) {
    addAllClasses.push(className);
  }
  const currentStatus = (pedido: any) =>{
   
    if(pedido.is_closed) {
       return 3
    }else {
         if(pedido.is_delivery) {
           return 2
        } else {
           if(pedido.is_process) {
             return 1
           } else {
             return 0
           }
        }
    }

 }

  return (
    <>
      <Collapse
        accordion={true}
        className={addAllClasses.join(' ')}
        defaultActiveKey="active"
      >
        {pedido.map((pedido: any) => (
          <Panel
            header={
              <CardWrapper onClick={onClick}>
                <OrderListHeader>
                  <TrackID>
                    Órden <span>#{pedido.id}</span>
                  </TrackID>
                  <Status>{progressData[currentStatus(pedido)+1]}</Status>
                </OrderListHeader>

                <OrderMeta>
                  <Meta>
                    Fecha Órden: <span>{pedido.order_date}</span>
                  </Meta>
                  <Meta>
                    Fecha Entrega: <span>{pedido.delivery_date}</span>
                  </Meta>
                  <Meta className="price">
                    Total:
                    <span>
                      {CURRENCY}
                      {pedido.total}
                    </span>
                  </Meta>
                </OrderMeta>
              </CardWrapper>
            }
            headerClass="accordion-title"
            key={pedido.id}
          >
            <OrderDetail>
              <DeliveryInfo>
                <DeliveryAddress>
                  <h3>Dirección Entrega</h3>
                  <Address>{pedido.delivery_address}</Address>
                </DeliveryAddress>

                <CostCalculation>
                  <PriceRow>
                    Subtotal
                    <Price>
                      {CURRENCY}
                      {pedido.subtotal}
                    </Price>
                  </PriceRow>
                  <PriceRow>
                    Discount
                    <Price>
                      {CURRENCY}
                      {pedido.descuento}
                    </Price>
                  </PriceRow>
                   
                  <PriceRow className="grandTotal">
                    Total
                    <Price>
                      {CURRENCY}
                      {pedido.total}
                    </Price>
                  </PriceRow>
                </CostCalculation>
              </DeliveryInfo>

              <ProgressWrapper>
                <Progress data={progressData} status={currentStatus(pedido)+1} />
              </ProgressWrapper>

              <OrderTableMobile>
                <Table
                  columns={columns}
                  data={pedido.items.length > 0 ? JSON.parse(pedido.items): []}
                  rowKey={(record) => record.id}
                  components={components}
                  scroll={{ x: 450 }}
                  // scroll={{ y: 250 }}
                />
              </OrderTableMobile>
            </OrderDetail>
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default OrderCard;
