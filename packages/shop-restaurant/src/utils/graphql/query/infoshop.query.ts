import { gql } from '@apollo/client'

export const GET_INFO_SHOP = gql`
  query MyQuery ($clientid: String!){
  suscripciones(where: {clientid: {_eq: $clientid}}) {
      id
      clientid
      usuario
      clave
      telefono
      correo
      is_negocio_web
      shop_image_body
      shop_image_logo
      crm_image_user 
      rubro_negocio
      descripcion
      fecha_suscripcion
      fecha_vencimiento
      negocio_web
      nombre
      estado
      facebook
      instagram
      is_root 
      direccion_tienda 
  }
}
`