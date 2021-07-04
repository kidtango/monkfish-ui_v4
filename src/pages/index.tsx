import React from 'react'

import PostsContainer from 'src/components/post/PostsContainer'
import ItemsContainer from 'src/components/item/ItemsContainer'
import MainLayout from 'src/layouts/MainLayout'
import MyTags from 'src/components/hashtag/MyTags'

export default function Index() {
  return (
    <MainLayout>
      <div className="flex mb-4 sm:space-x-4">
        <div>
          <MyTags />
        </div>
        <PostsContainer />
        <ItemsContainer />
      </div>
    </MainLayout>
  )
}
