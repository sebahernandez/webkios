import { gql } from '@apollo/client';


export const GET_LOGGED_IN_CUSTOMER = gql`
  query getUser($id: String = "1") {
    me(id: $id) {
      id
      name
      email
      address {
        id
        type
        name
        info
      }
      contact {
        id
        type
        number
      }
      card {
        id
        type
        cardType
        name
        lastFourDigit
      }
    }
  }
`;

export const GET_CLIENTE_USERNAME_ID = gql`
    query GET_CLIENTE_USERNAME_ID($clientid: String!, $username: String!) {
    cliente(where: {clientid: {_eq: $clientid}, username: {_eq: $username}}) {
      id
    }
  }
  
`;


export const GET_CLIENTE_USERNAME = gql`
    query GET_CLIENTE_USERNAME($clientid: String!, $username: String!) {
    cliente(where: {clientid: {_eq: $clientid}, username: {_eq: $username}}) {
      id
      nombre
      contacto
      direcciones
      contactos
      imageURL
      payments      
      username
      addresses {
        id
        type
        info
        name      
      }
      contacts {
        id
        type
        number
        name
      }
    }
  }
  
`;

export const GET_CLIENTE_USERNAME_PASSWORD = gql`
    query GET_CLIENTE_USERNAME($clientid: String!, $username: String!, $password: String!) {
    cliente(where: {clientid: {_eq: $clientid}, username: {_eq: $username}, password: {_eq: $password}}) {
      id
      username
      nombre
      contacto
      direcciones
      contactos
      payments
      imageURL
      username
      last_seen
      addresses {
        id
        type
        info
        name      
      }
      contacts {
        id
        type
        number
        name
      }
    }
  }
  
`;

export const GET_CLIENTE_ID = gql`
    query GET_CLIENTE_ID($clientid: String!, $id: Int!) {
    cliente(where: {clientid: {_eq: $clientid}, id: {_eq: $id}}) {
      id
      nombre
      contacto
      direcciones
      contactos
      payments
      imageURL
      username
      addresses {
        id
        type
        info
        name      
      }
      contacts {
        id
        type
        number
        name
      }
    }
  }
  
`;