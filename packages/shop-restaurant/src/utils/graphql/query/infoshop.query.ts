import { gql } from '@apollo/client'

export const GET_INFO_SHOP = gql`
  query MyQuery ($clientid: String!){
  info_shop_view(where: {clientid: {_eq: $clientid}}) {
    clientid
    description
    img_site_url
    nombre
    site_name
    status_shop
    plan_suscripcion
    fecha_vencimiento
    estado
  }
}
`