import React from 'react'
import AvatarButton from '../buttons/AvatarButton'
import { MoreFromPrps } from './MoreFrom'

const RecommendedPost: React.FC<MoreFromPrps> = ({ isFromPoster = false }) => {
  return (
    <div className="bg-ebonyClay-500 text-deepOcean-100 transition-all hover:(bg-ebonyClay-600 cursor-pointer)">
      <div className="flex items-start p-2">
        {!isFromPoster && (
          <div>
            <AvatarButton size="small" className="w-5 mr-2" />
          </div>
        )}
        <div>
          <h1 className="-mt-1 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quis
            sunt vero eligendi
          </h1>
          <p className="mt-2 space-x-1 text-xs opacity-50">
            <span>#SPS</span>
            <span>#REEF</span>
            <span>#SALTWATER</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RecommendedPost
