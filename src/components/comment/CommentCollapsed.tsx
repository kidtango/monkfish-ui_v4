import React, { FC } from 'react'
import { BsChevronExpand } from 'react-icons/bs'

interface ICommentCollapsed {
  handleExpand: () => void
  author: string
  numberOfReply?: number
}
const CommentCollapsed: FC<ICommentCollapsed> = ({
  handleExpand,
  author,
  numberOfReply = 0,
}) => {
  return (
    <div
      className="flex items-center w-full p-2 space-x-2 rounded bg-deepOcean-500 opacity-80 hover:opacity-100 hover:cursor-pointer hover:text-primary-300"
      onClick={handleExpand}
    >
      <BsChevronExpand />
      <span className="text-sm italic">
        {author}{' '}
        {!!numberOfReply && (
          <span>
            + {numberOfReply} {numberOfReply > 1 ? 'replies' : 'reply'}
          </span>
        )}
      </span>
    </div>
  )
}

export default CommentCollapsed
