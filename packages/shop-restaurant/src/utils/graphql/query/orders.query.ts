import { gql } from '@apollo/client';

export const GET_ORDERS = gql`
query getAllOrders($text: String, $user: Int!, $limit: Int) {
  orders(text: $text, limit: $limit, user: $user) {
    id
    status
    deliveryAddress
    amount
    date
    subtotal
    deliveryFee
    discount
    deliveryTime
    products {
      title
      price
      total
      image
      weight
      quantity
      id
    }
  }
}
`;

export const GET_ORDERS_PUBLIC = gql`
subscription fetchPublicOrders($clientid: String!, $limit: Int!, $user: Int!) {
pedido(limit: $limit, where: {cliente: {_eq: $user},clientid: {_eq: $clientid}, _and: {is_received: {_eq: true}}}, order_by: {creation_date: desc}) {
  id
  cliente
  order
  total
  delivery_address
  delivery_date
  total
  subtotal
  discount
  order_date
  is_received
  is_process
  is_delivery
  is_closed
  is_cancelled
  items  
  itemcount
}
}
`;

export const GET_ORDERS_CRM_PUBLIC = gql`
subscription ($clientid: String!, $order: String!) {
  pedido(where: {clientid: {_eq: $clientid}, _and: {order: {_eq: $order}}}) {
  id
  cliente
  clienteByCliente { 
    nombre
    imageURL
    username
  }
  order
  total
  delivery_address
  delivery_date
  total
  subtotal
  discount
  order_date
  is_received
  is_process
  is_delivery
  is_closed
  is_cancelled
  items  
  itemcount
}
}
`;


export const GET_ORDERS_OPEN = gql`
query GET_ORDER_ACTIVA($clientid: String!, $cliente: Int!) {
  pedido(where: {clientid: {_eq: $clientid}, cliente: {_eq: $cliente}, is_closed: {_eq: false}}) {
    id
    is_closed
    is_cancelled
  }
}
`;