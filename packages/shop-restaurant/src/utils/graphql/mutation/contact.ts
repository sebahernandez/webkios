import { gql } from '@apollo/client';

 export const UPDATE_CONTACT = gql`
 mutation editContact($id: Int!, $clientid: String!, $number: Int!, $cliente: Int!, $name: String!, $type: String) {
  update_contact(_set: {number: $number, type: $type, name: $name}, where: {clientid: {_eq: $clientid}, _and: {cliente: {_eq: $cliente}, _and: {id: {_eq: $id}}}}) {
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
mutation addContact($name: String!, $number: Int!,$clientid: String!, $type: String!, $cliente: Int!) {
  insert_contact(objects: { clientid: $clientid, number: $number, name: $name, type: $type, cliente: $cliente}) {
    affected_rows
    returning {
      id
    }
  }
}
`;
