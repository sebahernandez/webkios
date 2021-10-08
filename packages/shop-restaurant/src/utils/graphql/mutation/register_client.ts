import { gql } from '@apollo/client';

export const ADD_CLIENTE = gql`
        mutation Registro_Cliente($clientid: String!, $username: String! ) {
            insert_cliente(objects: { username: $username, clientid: $clientid }) {
            affected_rows
            returning {
                id
            }
            }
        }
  `;


  export const SET_CLIENTE = gql`
    mutation Set_Cliente($clientid: String!, $email: String!, $imageURL: String!, $nombre: String!) {
        update_cliente(where: {clientid: {_eq: $clientid}, username: {_eq: $email}}, _set: {imageURL: $imageURL, nombre: $nombre}) {
        affected_rows
        returning {
            id
        }
        }
    }
  `;