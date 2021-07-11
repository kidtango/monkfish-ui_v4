import React, { useState } from 'react'
import { RiHeart2Line } from 'react-icons/ri'
import { RiHeart2Fill } from 'react-icons/ri'
import { BsBookmarkCheck, BsBookmarkDash } from 'react-icons/bs'
import clsx from 'clsx'

interface PostDetailSideMenu {
  numberOfLoves: number
  numberOfBookmarks: number
  onLoveClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
  onBookmarkClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}

const PostDetailSideMenu: React.FC<PostDetailSideMenu> = ({
  numberOfBookmarks = 0,
  numberOfLoves = 0,
}) => {
  const [isLoved] = useState(true)
  const [isBookmarked] = useState(true)
  return (
    <div className="flex items-center justify-center p-1 space-x-2 sm:flex sm:flex-col sm:space-y-2 sm:space-x-0 sm:absolute">
      <div className="flex sm:flex-col sm:space-y-1 sm:space-x-0 items-center justify-center space-x-1`">
        <div className={postDetailButtonStyles({ isLoved, heart: true })}>
          {isLoved ? <RiHeart2Fill /> : <RiHeart2Line />}
        </div>
        <div className={counterStyles({ pink: true })}>{numberOfLoves}</div>
      </div>
      <div className="flex items-center justify-center space-x-1 sm:flex-col sm:space-y-1 sm:space-x-0">
        <div
          className={postDetailButtonStyles({ isBookmarked, bookmark: true })}
        >
          {isBookmarked ? <BsBookmarkCheck /> : <BsBookmarkDash />}
        </div>
        <div className={counterStyles({ teal: true })}>{numberOfBookmarks}</div>
      </div>
    </div>
  )
}

export default PostDetailSideMenu

interface IPostDetailButton {
  heart?: Boolean
  isLoved?: Boolean
  bookmark?: Boolean
  isBookmarked?: Boolean
}
function postDetailButtonStyles({
  heart = false,
  isLoved = false,
  bookmark = false,
  isBookmarked = false,
}: IPostDetailButton): string {
  const base =
    'p-2 text-gray-200 transition-colors rounded-full text-xl sm:text-3xl hover:rounded-full  hover:outline-none focus:outline-none'
  const _heart = 'hover:text-pink-600 hover:bg-pink-300 hover:bg-opacity-80'
  const _isLoved = 'text-pink-500'
  const _bookmark = 'hover:text-primary-100 hover:bg-primary-400'
  const _isBookmarked = 'text-primary-300'

  return clsx(
    base,
    heart && _heart,
    bookmark && _bookmark,
    isLoved && heart && _isLoved,
    isBookmarked && bookmark && _isBookmarked,
  )
}

interface ICounterStyles {
  pink?: Boolean
  teal?: Boolean
}

function counterStyles({ pink = false, teal = false }: ICounterStyles): string {
  const base = 'text-xs text-gray-200 opacity-70'

  return clsx(base, pink && 'text-pink-400', teal && 'text-primary-300')
}
