import { gql } from '@apollo/client';


export const GET_ABANDONADOS = gql`
  query carritos_abandonados($clientid: String!, $customerid: Int!) {
    carritos_abandonados(where: {clientid: {_eq: $clientid}, customerid: {_eq: $customerid}, deleted: {_eq: false}}) {
      clientid
      customerid
      data_json
      deleted
      fecha
      id
    }
  }
`;