import React, { FC, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Session } from 'next-auth'

import { RiMoreFill } from 'react-icons/ri'

const menuItemStyles = () =>
  `block px-4 py-2 text-sm transition-colors rounded-md cursor-pointer text-gray-50 hover:bg-primary-200 flex items-center space-x-2`

const UserMenu = () => {
  return (
    <Menu>
      {({ open }) => (
        <div className="relative inline-block text-left">
          <Menu.Button className="p-2 focus:outline-none text-lg text-deepOcean-300 hover:(bg-deepOcean-700 rounded)">
            <RiMoreFill />
          </Menu.Button>
          {/* Use the Transition + open render prop argument to add transitions. */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="absolute right-0 z-50 w-48 p-1 origin-top-right rounded-md shadow-lg bg-primary ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <Menu.Item>
                {({ active }) => <div className={menuItemStyles()}>Edit</div>}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => <div className={menuItemStyles()}>Delete</div>}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}

export default UserMenu
