import { gql } from '@apollo/client';

export const ADD_VISITA = gql`
    mutation push_visitas ($clientid: String!,$cliente: Int!){
        insert_visitas(objects: {cliente: $cliente, clientid: $clientid}) {
        affected_rows
        returning {
            id
        }
        }
    }
`;
  