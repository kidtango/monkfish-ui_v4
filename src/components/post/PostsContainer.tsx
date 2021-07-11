import React from 'react'
import UnderlineButton from '../buttons/underline-button/UnderlineButton'
import Post from './Post'

// sm:ring sm:rounded-lg sm:ring-ebonyClay-400
const PostsContainer = () => {
  return (
    <div className="w-full sm:p-1">
      {/* Header */}
      <div className="flex justify-between p-2 mb-2 sm:p-0">
        <div className="text-2xl font-bold text-gray-300">Post</div>
        <div className="flex mb-2 space-x-1 sm:space-x-1">
          <UnderlineButton size="medium">Feed</UnderlineButton>
          <UnderlineButton size="medium">Week</UnderlineButton>
          <UnderlineButton size="medium">Year</UnderlineButton>
          <UnderlineButton size="medium">Infinity</UnderlineButton>
        </div>
      </div>
      {/* Header ends */}
      <div className="space-y-4 md:mt-4">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default PostsContainer
