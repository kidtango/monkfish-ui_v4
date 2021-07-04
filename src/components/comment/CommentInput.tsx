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
      <form className="flex space-x-3">
        {!isCommentReply && (
          <div className="min-w-max">
            <AvatarButton size="medium" />
          </div>
        )}
        <div className="w-full min-w-max">
          <textarea
            className="transition-all w-full rounded-t bg-ebonyClay-700 focus:(h-40) p-2 border-2 border-ebonyClay-400 h-20 text-gray-200 outline-none"
            placeholder="Add to the discussion"
          />
          <div className="p-1 mb-2 -mt-2 border-2 rounded-b border-ebonyClay-400 bg-ebonyClay-600 ">
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
