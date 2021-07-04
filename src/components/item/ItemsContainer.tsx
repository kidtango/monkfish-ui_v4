import React from 'react'
import UnderlineButton from '../buttons/underline-button/UnderlineButton'
import Item from './Item'

const ItemContainer = () => {
  return (
    <div className="flex-col hidden max-w-xs p-4 rounded-lg ring ring-ebonyClay-400 min-w-max md:flex">
      <div className="mb-4">
        <UnderlineButton size={'medium'}>Listings</UnderlineButton>
      </div>
      {/* card container */}
      <div className="space-y-2 ">
        {/* Item card */}
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      {/* Item card ends*/}
    </div>
  )
}

export default ItemContainer
