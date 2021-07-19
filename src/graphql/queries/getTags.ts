import { gql } from '@apollo/client'

export const GET_TAGS = gql`
  query get_tags {
    tags {
      id
      name
      label
      color
      creator
      created_at
      updated_at
    }
  }
`
