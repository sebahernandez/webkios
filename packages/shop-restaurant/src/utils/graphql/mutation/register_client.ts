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
    mutation Set_Cliente($clientid: String!, $id: Int!, $imageURL: String!) {
        update_cliente(where: {clientid: {_eq: $clientid}, id: {_eq: $id}}, _set: {imageURL: $imageURL}) {
        affected_rows
        returning {
            id
        }
        }
    }
  `;