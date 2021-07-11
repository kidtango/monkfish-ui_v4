import React from 'react'

import PostsContainer from 'src/components/post/PostsContainer'
import ItemsContainer from 'src/components/item/ItemsContainer'
import MainLayout from 'src/layouts/MainLayout'
import MyTags from 'src/components/hashtag/MyTags'
import { useGetUserQuery } from 'src/generated'

function Index() {
  const { loading, data } = useGetUserQuery({
    variables: { id: '109851137750146210943' },
  })

  if (loading) <div>loading...</div>

  console.log(data?.users_by_pk?.name)
  return (
    <MainLayout>
      <div className="flex mb-4 space-x-2">
        <div>
          <MyTags />
        </div>
        <PostsContainer />
        <ItemsContainer />
      </div>
    </MainLayout>
  )
}

export default Index
