import React, { FC } from 'react'
import { FiTrash2 } from 'react-icons/fi'

export type Tag = {
  id: number
  name: string
  color: string
  label: string
}

interface ITag {
  tag: Tag
  onDelete?: (tagId: number) => void
}

const Tag: FC<ITag> = ({ tag, onDelete }) => {
  const handleClick = () => onDelete && onDelete(tag.id)

  return (
    <div className="flex min-w-max">
      <div
        className={`p-2 text-sm text-gray-50 rounded hover:cursor-pointer flex items-center space-x-2 shadow`}
        style={{ background: tag.color }}
      >
        <span>{tag.label}</span>
        {onDelete && (
          <FiTrash2
            onClick={handleClick}
            className="text-gray-200 transition-all hover:text-gray-50 hover:text-lg"
          />
        )}
      </div>
    </div>
  )
}

export default Tag
