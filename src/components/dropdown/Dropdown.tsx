import React, { FC, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { RiMoreFill } from 'react-icons/ri'

type Item = {
  id: number
  label: string
}
interface IDropdown {
  isOpen?: boolean
  items?: Item[]
  handleClick: (id: number) => void
}

const Dropdown: FC<IDropdown> = ({ isOpen, items, handleClick }) => {
  return (
    <Menu>
      {() => (
        <div className="relative inline-block text-left">
          <Menu.Button className="p-2 text-lg focus:outline-none text-deepOcean-300 hover:bg-ocean-700 hover:rounded">
            <RiMoreFill />
          </Menu.Button>

          {/* Use the Transition + open render prop argument to add transitions. */}
          <Transition
            show={isOpen}
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
              className="absolute left-0 z-50 w-48 p-1 origin-top-left rounded-md shadow-lg bg-primary-500 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              {items?.map(item => (
                <Menu.Item key={item.id}>
                  {() => (
                    <div
                      className={menuItemStyles()}
                      onClick={() => handleClick(item.id)}
                    >
                      {item.label}
                    </div>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  )
}

export default Dropdown

const menuItemStyles = () =>
  `block px-4 py-2 text-sm transition-colors rounded-md cursor-pointer text-gray-50 hover:bg-primary-200 flex items-center space-x-2`
