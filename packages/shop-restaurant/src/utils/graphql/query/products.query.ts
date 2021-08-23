
import { gql } from '@apollo/client';


export const GET_PRODUCTS_X_CATEGORIA = gql`
query n1($clientid: String!, $categoria: String) {
  producto(where: {clientid: {_eq: $clientid}, _and: {categorias: {name: {_eq: $categoria} }}}) {
    id
    clientid
    nombre
    descripcion
    precio
    cantidad
    unidad
    imageURL
    gallery
    categoria
    descripcion
    categorias {
      name
      value
    }
    descuento
    precio_venta
    fecha_creacion
  }
}
`;

export const GET_PRODUCTS_X_TITULO = gql`
query n1($clientid: String!, $titulo: String) {
  producto(where: {clientid: {_eq: $clientid}, _and: {nombre: {_like: $titulo} }}) {
    id
    clientid
    nombre
    descripcion
    precio
    cantidad
    unidad
    imageURL
    gallery
    categoria
    descripcion
    categorias {
      name
      value
    }
    descuento
    precio_venta
    fecha_creacion
  }
}
`;


  