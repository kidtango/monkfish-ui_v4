import React from 'react'
import { ImFire } from 'react-icons/im'
import RecommendedPost from './RecommendedPost'

export interface MoreFromPrps {
  isFromPoster: boolean
}

const Trending = () => (
  <div className="flex items-center justify-center min-w-full p-1 space-x-1 font-semibold border-b border-ebonyClay-700">
    <span>Trending on</span>
    <span className="font-bold text-primary-300 hover:text-primary-600 hover:cursor-pointer">
      Monkfish Community
    </span>
    <span className="text-secondary mt-0.5">
      <ImFire />
    </span>
  </div>
)

const MoreFromPoster = () => (
  <div className="flex items-center justify-center min-w-full p-1 space-x-1 font-semibold border-b border-ebonyClay-400">
    <span>More from</span>
    <span className="font-bold text-primary-300 hover:text-primary-600 hover:cursor-pointer">
      8BallReefer
    </span>
  </div>
)

const MoreFrom: React.FC<MoreFromPrps> = ({ isFromPoster = true }) => {
  return (
    <div className="z-30 p-1 rounded-md min-w-min ring-2 ring-ebonyClay-400">
      <div className="flex flex-col items-center text-xs bg-ebonyClay-600 rounded-t-md text-ocean-100">
        {isFromPoster ? <MoreFromPoster /> : <Trending />}
        <div>
          <RecommendedPost isFromPoster={isFromPoster} />
          <div className="w-full border-b border-ebonyClay-400" />
        </div>
        <div>
          <RecommendedPost isFromPoster={isFromPoster} />
          <div className="w-full border-b border-ebonyClay-700" />
        </div>
        <div>
          <RecommendedPost isFromPoster={isFromPoster} />
        </div>
      </div>
    </div>
  )
}

export default MoreFrom
