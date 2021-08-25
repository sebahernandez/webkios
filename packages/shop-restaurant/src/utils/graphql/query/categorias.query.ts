import { gql } from '@apollo/client';


export const GET_CATEGORIAS = gql`
  query categorias_view_cid($clientid: String!) {
    categorias_view_cid(where: {clientid: {_eq: $clientid}}) {
      id
      name 
      value
      imageURL
    }
  }
`;