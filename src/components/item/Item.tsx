import React from 'react'
import { RiHeart2Line } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'
import AvatarButton from '../buttons/AvatarButton'
import Button from '../buttons/Button'

const Item = () => {
  return (
    <div className="flex-row overflow-hidden transition-colors bg-opacity-50 rounded-md bg-ebonyClay-600 hover:cursor-pointer ring-2 ring-ebonyClay-600 hover:bg-opacity-90 backdrop-filter hover:shadow-lg">
      <div>
        <div className="aspect-w-3 aspect-h-2 lg:aspect-w-1 lg:aspect-h-1">
          <img
            className="object-cover"
            src="https://cdn.shopify.com/s/files/1/2104/4149/products/acr-H6H4-2_1024x1024_2x_502d3e07-c606-484f-b83d-7887e48a98f1.jpg?v=1500776485"
          />
        </div>
        <div className="p-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex space-x-1">
              <AvatarButton size="small" />
              <div className="text-[.65rem] leading-4">
                <p className="font-semibold text-green-400">James Kim</p>
                <p className="text-gray-400">Dec 26, 2021</p>
              </div>
            </div>
            <Button buttonType={'plain'} size="small" type="button">
              <RiHeart2Line className="text-pink-500" />
              <span className="text-[.65rem] text-pink-500">2</span>
            </Button>
          </div>
          <div className="p-2 text-base hover:text-primary-300 hover:cursor-pointer">
            Neon Green Birdnest
          </div>
          <div className="flex justify-center w-full mt-4">
            <Button buttonType="fullWidth" size="medium" type="button">
              <span>Ask Seller</span>
              <AiOutlineMessage />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
