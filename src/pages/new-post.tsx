import React from 'react'
import CreatePost from 'src/components/create-post/CreatePost'
import { useGet_TagsQuery, useCreate_PostMutation } from 'src/generated'

const NewPost = () => {
  const { data, loading } = useGet_TagsQuery()
  const [createPost] = useCreate_PostMutation()

  if (loading) return <div>Loading...</div>

  return <CreatePost tags={data?.tags} createPost={createPost} />
}

export default NewPost
