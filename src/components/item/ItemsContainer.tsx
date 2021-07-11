import React from 'react'
import UnderlineButton from '../buttons/underline-button/UnderlineButton'
import Item from './Item'

// rounded-lg ring ring-ebonyClay-400
const ItemContainer = () => {
  return (
    <div className="flex-col hidden p-1 lg:flex min-w-max">
      <div className="mb-6">
        <UnderlineButton size={'medium'}>Listings</UnderlineButton>
      </div>
      {/* card container */}
      <div className="space-y-4">
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
