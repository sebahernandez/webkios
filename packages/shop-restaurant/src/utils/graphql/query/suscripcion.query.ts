import { gql } from '@apollo/client';

export const GET_SUSCRIPCION_X_HOST = gql`
  query obtener_suscripcion_id_x_host($host: String!) {
    suscripciones(where: {is_root: {_neq: true}, negocio_web: {_like: $host}}) {
      clientid
      negocio_web
      token_mercado
    }
  }
`;
