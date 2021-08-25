import { gql } from '@apollo/client';

/* export const ADD_ORDER = gql`
  mutation($orderInput: String!) {
    addOrder(orderInput: $orderInput) {
      id
      userId
      products {
        id
        title
      }
      status
    }
  }
`; */

export const GET_PAYMENT = gql`
  mutation($paymentInput: String!) {
    charge(paymentInput: $paymentInput) {
      status
    }
  }
`;
 

export const ADD_ORDER = gql`
  mutation insert_pedido ($received: Boolean!, $clientid: String!, $cliente: Int!, $total: Int!, $subtotal: Int!, $itemcount: Int!, $discount: Int!, $metodo_pago: String!, $order: String!, $items: String!, $delivery_date: String!, $order_date: String!, $delivery_address: String!, $contacto: String!, $status: String!,$estado: String){
   insert_pedido(
        objects: {
          clientid: $clientid, 
          cliente: $cliente,
          total: $total, 
          subtotal: $subtotal, 
          metodo_pago: $metodo_pago, 
          order: $order, 
          items: $items,
          itemcount: $itemcount,
          discount: $discount,
          delivery_date: $delivery_date,
          order_date: $order_date,
          delivery_address: $delivery_address,
          contacto: $contacto,
          status: $status,
          is_received: $received
          estado: $estado
        }) {
            affected_rows
            returning {
              order
            }
          }
}
`;

