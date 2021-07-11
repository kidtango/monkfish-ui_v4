import React from 'react'
import PostDetails from 'src/components/post-details/PostDetails'
import PostDetailSideMenu from 'src/components/post-details/SideMenu'
import ProfileCard from 'src/components/profile-card/ProfileCard'
import MainLayout from 'src/layouts/MainLayout'
import MoreFrom from '../components/moreFrom/MoreFrom'

const PostPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center mb-4 sm:space-x-2 sm:flex-row">
        <div className="hidden mt-16 mr-14 sm:flex">
          <PostDetailSideMenu numberOfBookmarks={2} numberOfLoves={1} />
        </div>
        <div className="w-full mb-5 md:w-5/6 md:mt-4">
          <PostDetails />
        </div>
        <div className="hidden max-w-xs p-2 mt-2 lg:flex lg:flex-col">
          <div className="w-64 space-y-4">
            <ProfileCard name="8BallReefer" joinDate={new Date()} />
            <MoreFrom isFromPoster={true} />
          </div>
        </div>
        {/* Mobile Post Detail Side Menu */}
        <div className="fixed bottom-0 w-full border-t sm:hidden bg-ebonyClay-500 border-ebonyClay-400">
          <PostDetailSideMenu numberOfBookmarks={3} numberOfLoves={1} />
        </div>
      </div>
    </MainLayout>
  )
}

export default PostPage
