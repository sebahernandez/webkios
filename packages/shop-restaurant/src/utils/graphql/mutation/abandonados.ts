import { gql } from '@apollo/client';

export const AGREGAR_ABANDONADO = gql`
  mutation insert_carritos_abandonados($clientid: String!, $customerid: Int!, $data_json: String!) {
    insert_carritos_abandonados(objects: {clientid: $clientid, customerid: $customerid, data_json: $data_json}) {
      affected_rows
    }
  }
`;

export const SACAR_ABANDONADO = gql`
mutation update_carritos_abandonados($clientid: String!, $customerid: Int!) {
  update_carritos_abandonados(where: {clientid: {_eq: $clientid}, customerid: {_eq: $customerid}}, _set: {deleted: true}) {
    affected_rows
  }
}
`;

export const ELIMINA_ABANDONADO = gql`
mutation delete_carritos_abandonados($clientid: String!, $customerid: Int!) {
  delete_carritos_abandonados(where: {clientid: {_eq: $clientid}, customerid: {_eq: $customerid}}) {
    affected_rows
  }
}
`;

export const UPGRADE_ABANDONADO = gql`
mutation upgrade_carritos_abandonados($clientid: String!, $customerid: Int!,$data_json: String!) {
  update_carritos_abandonados(where: {clientid: {_eq: $clientid}, customerid: {_eq: $customerid}}, _set: {data_json: $data_json, fecha: "now()"}) {
    affected_rows
  }
}
`;

