import clsx from 'clsx'
import React from 'react'
import { BsCalendar } from 'react-icons/bs'
import AvatarButton from '../buttons/AvatarButton'
import moment from 'moment'
import Button from '../buttons/Button'

function actionButtonStyles() {
  const base =
    'ring-2 ring-ocean-400 p-1 rounded w-20 outline-none transition-colors  focus:outline-none hover:ring-2 text-ocean-100 hover:bg-ocean-500 hover:text-gray-100 bg-ocean-400 bg-opacity-50 backdrop-filter backdrop-blur'
  return clsx(base)
}

export interface ProfileCardProps {
  name: string
  joinDate: Date
  followersNumber?: number
  followingNumber?: number
  isLoading?: Boolean
  imgUrl?: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name = 'JReefer',
  joinDate = new Date(),
  followersNumber = 1000,
  followingNumber = 12,
  // isLoading = false,
  // imgUrl = 'https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/avatar-2-story.jpg',
}) => {
  return (
    <div className="relative rounded-md bg-ebonyClay-600 text-ocean-100">
      <div className="h-20 bg-gradient-to-r from-pink-500 to-primary-300 rounded-t-md"></div>
      <div className="flex justify-center mb-9">
        <span className="absolute top-8">
          <AvatarButton size="large" />
        </span>
      </div>
      <div className="flex flex-col items-center mt-1">
        <div className="flex items-center">
          <div className="transition-colors text-lg font-semibold text-center hover:(text-secondary-dark cursor-pointer)">
            {name}
          </div>
        </div>
        <div className="flex flex-col items-center text-xs">
          <div className="flex items-center space-x-1 text-xs">
            <span className="text-gray-400">
              <BsCalendar className="opacity-60" />
            </span>
            <span className="text-gray-400">Joined</span>
            <div>{moment(joinDate).format('MMM Do YYYY')}</div>
          </div>
          <div className="flex justify-center pb-3 my-4 text-xs">
            <div className="pr-3 mr-3 text-center">
              <h2 className="text-lg font-semibold text-primary-300">
                {followersNumber}
              </h2>
              <span className="text-xs text-gray-500 opacity-70">
                {followersNumber > 1 ? 'Followers' : 'Follower'}
              </span>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-primary-300">
                {followingNumber}
              </h2>
              <span className="text-xs text-gray-500 opacity-70">
                {followingNumber > 1 ? 'Followings' : 'Following'}
              </span>
            </div>
          </div>

          <div className="flex mb-4 space-x-2">
            <div>
              <button type="button" className={actionButtonStyles()}>
                <span className="text-xs">PROFILE</span>
              </button>
            </div>
            <div>
              <button type="button" className={actionButtonStyles()}>
                <span className="text-xs">SHOP</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full p-2 mb-2">
          <Button buttonType={'fullWidth'} size="large">
            <span className="">Follow</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
