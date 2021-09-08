import { gql } from '@apollo/client';

 export const UPDATE_ADDRESS = gql`
 mutation editAddress($id: Int!, $clientid: String!, $info: String!, $cliente: Int!, $name: String!, $type: String) {
  update_address(_set: {info: $info, type: $type, name: $name}, where: {clientid: {_eq: $clientid}, _and: {cliente: {_eq: $cliente}, _and: {id: {_eq: $id}}}}) {
    affected_rows
  }
}
`;  
export const DELETE_ADDRESS = gql`
mutation deleteAddress($id: Int!, $clientid: String!, $cliente: Int!) {
  delete_address(where: {clientid: {_eq: $clientid}, id: {_eq: $id}, cliente: {_eq: $cliente}}) {
    affected_rows
  }
}
`;

export const INSERT_ADDRESS = gql`
mutation addAddress($name: String!, $info: String!,$clientid: String!, $type: String!, $cliente: Int!) {
  insert_address(objects: { clientid: $clientid, info: $info, name: $name, type: $type, cliente: $cliente}) {
    affected_rows
    returning {
      id
    }
  }
}
`;
