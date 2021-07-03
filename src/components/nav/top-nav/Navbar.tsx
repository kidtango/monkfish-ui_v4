import React, { Dispatch, SetStateAction } from 'react'
import { HiOutlineCog } from 'react-icons/hi'
import { HiOutlineBell } from 'react-icons/hi'
import { useSession, signout } from 'next-auth/client'

import ToggleMenuButton from './ToggleMenuButton'
import IconButton from '../../buttons/IconButton'
import UserMenu from '../user-menu/UserMenu'
import MonkfishLogo from './MonkfishLogo'
import LoginButton from 'src/auth/login-button/LoginButton'

interface NavbarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [session, loading] = useSession()
  if (loading) return <div>loading...</div>

  return (
    <header className="bg-ebonyClay-800 bg-opacity-50 backdrop-filter backdrop-blur sticky top-0 z-30 h-[72px] w-full border-b border-ebonyClay-400">
      <div className="flex items-center justify-between">
        {/* mobile navbar */}

        {/* Navbar left */}
        <div className="flex items-center ml-2 space-x-4">
          {/* Toggle Sidebar Button */}
          <ToggleMenuButton
            onClick={setIsSidebarOpen}
            isSidebarOpen={isSidebarOpen}
          />
          <MonkfishLogo />
        </div>

        {/* Navbar Right */}
        {session ? (
          <div className="flex items-center mr-4 space-x-1">
            <div className="hidden space-x-1 md:flex">
              <IconButton Icon={<HiOutlineBell />} />
              <IconButton Icon={<HiOutlineCog />} />
            </div>
            <div className="mt-1">
              <UserMenu session={session!} signout={signout} />
            </div>
          </div>
        ) : (
          <div className="mr-1 sm:mr-5">
            <LoginButton />
          </div>
        )}

        {/* mobile navbar */}
      </div>
    </header>
  )
}

export default Navbar
