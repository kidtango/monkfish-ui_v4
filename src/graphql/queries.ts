import { gql } from '@apollo/client'

export const GET_USER = gql`
  query GetUser($id: String!) {
    users_by_pk(id: $id) {
      id
      name
    }
  }
`

export const INSERT_NEW_USER = gql`
   mutation INSERT_NEW_USER($id: String!, $name: String!, $email: String, $picture: String) {
    insert_users_one(object: {id: $id, name: $name, email: $email, picture: $picture}, on_conflict: {constraint: users_pkey, update_columns: created_at}) {
      id
    }
  }
`