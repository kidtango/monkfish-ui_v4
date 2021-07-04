import React, { FC, useState } from 'react'
import { BsChevronContract } from 'react-icons/bs'

import { FaRegCommentDots } from 'react-icons/fa'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'
import { RiHeart2Line } from 'react-icons/ri'
import CommentInput from './CommentInput'
import CommentCollapsed from './CommentCollapsed'
import CommentMenu from './CommentMenu'
import AvatarButton from '../buttons/AvatarButton'
import Button from '../buttons/Button'
import clsx from 'clsx'

interface IReply {
  isReplyByPostOwner?: Boolean
  isLiked?: Boolean
}

const Reply: FC<IReply> = ({ isReplyByPostOwner, isLiked }) => {
  const [isToggleReply, setIsToggleReply] = useState(false)
  const [isCollpased, setIsCollpased] = useState(false)

  const toggleComment = () => {
    setIsToggleReply(!isToggleReply)
  }

  const toggleCommentCollapsed = () => {
    setIsCollpased(!isCollpased)
  }
  return (
    <div className="flex flex-col w-full space-x-2 space-y-2">
      {!isCollpased && (
        <div className="flex space-x-3">
          <div className="flex flex-col items-center space-y-4 min-w-max">
            <AvatarButton size="medium" />
            <Button
              buttonType={'plain'}
              size="medium"
              onClick={toggleCommentCollapsed}
            >
              <BsChevronContract />
            </Button>
          </div>
          <div className="space-y-4">
            <div
              className={clsx(
                isReplyByPostOwner &&
                  'w-full p-3 space-y-2 rounded ring ring-ebonyClay-500',
              )}
            >
              <div className="flex items-center place-content-between">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-400">
                    David Dal Busco
                  </span>
                  <span>
                    <BiDotsVerticalRounded />
                  </span>
                  <span className="text-sm opacity-60">Jun 8</span>
                </div>
                <CommentMenu />
              </div>
              <div>
                <div className={`${isReplyByPostOwner} && 'text-green-300'`}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Libero, architecto eaque illum porro nemo, atque veritatis
                  animi dolor praesentium quisquam harum eveniet vel inventore
                  perferendis ad perspiciatis? Iure, odio quas!
                </div>
              </div>
            </div>
            {!isToggleReply && (
              <div className="flex space-x-2">
                <Button buttonType={'plain'} size="medium">
                  {isLiked ? <RiHeart2Fill /> : <RiHeart2Line />}
                  <span>10 Likes</span>
                </Button>
                <Button
                  onClick={toggleComment}
                  buttonType={'plain'}
                  size="medium"
                >
                  <FaRegCommentDots />
                  <span className="hidden sm:flex">Reply</span>
                </Button>
              </div>
            )}
            {isToggleReply && (
              <CommentInput
                isCommentReply={true}
                handleDismiss={toggleComment}
              />
            )}
          </div>
        </div>
      )}

      {/* Collapsed comment section starts */}
      {isCollpased && (
        <CommentCollapsed
          author={'Huy Nguyen'}
          handleExpand={toggleCommentCollapsed}
        />
      )}
      {/* Collapsed comment section ends */}
    </div>
  )
}

export default Reply
