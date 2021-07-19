import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query getPosts {
    posts {
      author_id
      content
      created_at
      header_image
      is_bookmarked_by_user
      is_liked_by_user
      likes
      id
    }
  }
`
