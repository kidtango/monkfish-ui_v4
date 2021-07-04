import React from 'react'
import { ImFire } from 'react-icons/im'
import RecommendedPost from './RecommendedPost'

export interface MoreFromPrps {
  isFromPoster: boolean
}

const Trending = () => (
  <div className="flex items-center justify-center min-w-full p-1 space-x-1 font-semibold border-b border-ebonyClay-700">
    <span>Trending on</span>
    <span className="text-primary-300 font-bold hover:(text-primary-600 cursor-pointer)">
      Monkfish Community
    </span>
    <span className="text-secondary mt-0.5">
      <ImFire />
    </span>
  </div>
)

const MoreFromPoster = () => (
  <div className="flex items-center justify-center min-w-full p-1 space-x-1 font-semibold border-b border-ebonyClay-700">
    <span>More from</span>
    <span className="text-primary-300 font-bold hover:(text-primary-600 cursor-pointer)">
      8BallReefer
    </span>
  </div>
)

const MoreFrom: React.FC<MoreFromPrps> = ({ isFromPoster = true }) => {
  return (
    <div className="min-w-min">
      <div className="flex flex-col items-center text-xs bg-ebonyClay-500 rounded-t-md text-deepOcean-100">
        {isFromPoster ? <MoreFromPoster /> : <Trending />}
        <div>
          <RecommendedPost isFromPoster={isFromPoster} />
          <div className="w-full border-b border-ebonyClay-700" />
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
