import { gql } from '@apollo/client'

export const CREATE_POST = gql`
  mutation create_post(
    $author_id: String!
    $content: String!
    $header_image: String!
    $title: String!
    $is_published: Boolean
  ) {
    insert_posts_one(
      object: {
        # post_tags: { data: $data }
        author_id: $author_id
        content: $content
        header_image: $header_image
        title: $title
        is_published: $is_published
      }
    ) {
      id
    }
  }
`
