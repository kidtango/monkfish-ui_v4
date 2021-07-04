import React, { FC, useState } from 'react'
import { BsChevronContract } from 'react-icons/bs'

import { FaRegCommentDots } from 'react-icons/fa'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { RiHeart2Fill } from 'react-icons/ri'
import { RiHeart2Line } from 'react-icons/ri'
import { RiMoreFill } from 'react-icons/ri'
import AvatarButton from '../buttons/AvatarButton'
import Button from '../buttons/Button'
import clsx from 'clsx'

const avatarImage =
  'https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1'

interface IComment {
  isCommentReply?: Boolean
  isReplyByPostOwner?: Boolean
  isLiked?: Boolean
}

const Comment: FC<IComment> = ({
  isCommentReply,
  isReplyByPostOwner,
  isLiked,
}) => {
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
        <div>
          <div className="flex space-x-3">
            <div className="flex flex-col items-center space-y-4 min-w-max">
              <AvatarButton size="medium" image={avatarImage} />
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
                  'w-full p-3 space-y-2 rounded ring ring-ebonyClay-500',
                  isCommentReply && 'ring-ebonyClay-700',
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
                  <div className={`${isReplyByPostOwner} && text-green-300`}>
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
                    buttonType={'plain'}
                    onClick={toggleComment}
                    size="medium"
                  >
                    <FaRegCommentDots />
                    <span className="hidden sm:flex">Reply</span>
                  </Button>
                </div>
              )}
              {/* Input Box for reply */}
              {isToggleReply && (
                <CommentInput
                  isCommentReply={true}
                  handleDismiss={toggleComment}
                />
              )}
            </div>
          </div>
          <div className="mt-5 ml-8">
            <Reply />
          </div>
        </div>
      )}

      {/* Collapsed comment section starts */}
      {isCollpased && (
        <CommentCollapsed
          author={'Jack Nguyen'}
          handleExpand={toggleCommentCollapsed}
          numberOfReply={4}
        />
      )}
      {/* Collapsed comment section ends */}
    </div>
  )
}

export default Comment
