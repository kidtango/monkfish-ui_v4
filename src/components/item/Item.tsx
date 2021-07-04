import React from 'react'
import { RiHeart2Line } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import AvatarButton from '../buttons/AvatarButton'

const itemButtonStyles =
  'flex items-center justify-center space-x-1 text-xs bg-primary-600 p-2 px-3 rounded-md min-w-full hover:bg-primary-400 outline-none focus:outline-none focus:ring focus:ring-primary-400'

const Item = () => {
  return (
    <div className="flex-row overflow-hidden transition-colors rounded-md bg-ebonyClay-600 hover:cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60">
      <div>
        <div className="aspect-w-3 aspect-h-2 lg:aspect-w-1 lg:aspect-h-1">
          <img
            className="object-cover"
            src="https://cdn.shopify.com/s/files/1/2104/4149/products/acr-H6H4-2_1024x1024_2x_502d3e07-c606-484f-b83d-7887e48a98f1.jpg?v=1500776485"
          />
        </div>
        <div className="p-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex space-x-2">
              <AvatarButton size="small" />
              <div className="text-xs leading-4">
                <p className="font-semibold text-green-400">James Kim</p>
              </div>
            </div>
            <div className="flex items-center space-x-1 hover:text-secondary-light">
              <RiHeart2Line />
              <span className="text-xs">2</span>
            </div>
          </div>
          <div className="p-2 text-base">Neon Green Birdnest</div>
          <div className="mt-2">
            <div className={itemButtonStyles}>
              <span>Ask Seller</span>
              <AiOutlineMessage />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
