import React, { FC } from 'react'
import { RiImageAddLine } from 'react-icons/ri'
import AvatarButton from '../buttons/AvatarButton'
import Button from '../buttons/Button'

interface ICommentInput {
  isCommentReply?: Boolean
  handleDismiss?: () => void
}

const CommentInput: FC<ICommentInput> = ({ isCommentReply, handleDismiss }) => {
  return (
    <div className="w-full">
      <form className="flex p-1 space-x-2">
        {!isCommentReply && (
          <div className="min-w-max">
            <AvatarButton size="medium" />
          </div>
        )}
        <div className="w-full">
          <textarea
            className={textAreaStyles}
            placeholder="Add to the discussion"
          />
          <div className="mb-2 rounded ring-2 ring-ebonyClay-400 bg-ebonyClay-600">
            <Button buttonType={'plain'} size="small">
              <RiImageAddLine />
              <span>Add Image</span>
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button buttonType={'primary'} size="medium">
              Submit
            </Button>
            {isCommentReply && (
              <Button
                buttonType={'plain'}
                size="medium"
                onClick={handleDismiss}
              >
                Dismiss
              </Button>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default CommentInput

const textAreaStyles =
  'p-1 w-full h-20 text-gray-200 transition-all border-transparent rounded outline-none ring-2 bg-ebonyClay-700 focus:h-40 ring-ebonyClay-400 focus:border-transparent focus:ring-2 focus:ring-ebonyClay-300'
