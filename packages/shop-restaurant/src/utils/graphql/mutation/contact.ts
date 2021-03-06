import { gql } from '@apollo/client';

 export const UPDATE_CONTACT = gql`
 mutation editContact($id: Int!, $clientid: String!, $number: String!, $cliente: Int!, $type: String) {
  update_contact(_set: {number: $number, type: $type}, where: {clientid: {_eq: $clientid}, _and: {cliente: {_eq: $cliente}, _and: {id: {_eq: $id}}}}) {
    affected_rows
  }
}
`;  
export const DELETE_CONTACT = gql`
mutation deleteContact($id: Int!, $clientid: String!, $cliente: Int!) {
  delete_contact(where: {clientid: {_eq: $clientid}, id: {_eq: $id}, cliente: {_eq: $cliente}}) {
    affected_rows
  }
}
`;

export const INSERT_CONTACT = gql`
mutation addContact( $number: String!,$clientid: String!, $type: String!, $cliente: Int!) {
  insert_contact(objects: { clientid: $clientid, number: $number,type: $type, cliente: $cliente}) {
    affected_rows
    returning {
      id
    }
  }
}
`;
