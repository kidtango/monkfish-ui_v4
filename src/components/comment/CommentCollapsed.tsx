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
      className="w-full flex items-center space-x-2 p-2 bg-deepOcean-500 rounded opacity-80 hover:(opacity-100 cursor-pointer)"
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
