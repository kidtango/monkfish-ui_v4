import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { HiOutlineCog } from 'react-icons/hi'
import { HiOutlineBell } from 'react-icons/hi'
import { useSession, signout } from 'next-auth/client'

import ToggleMenuButton from './ToggleMenuButton'
import IconButton from '../../buttons/IconButton'
import UserMenu from '../user-menu/UserMenu'
import MonkfishLogo from './MonkfishLogo'
import LoginButton from 'src/components/auth/login-button/LoginButton'

interface INavbar {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar: React.FC<INavbar> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [session, loading] = useSession()

  useEffect(() => {
    if (session) {
      localStorage.setItem('token', session.token)
    } else {
      localStorage.clear()
    }
  }, [session])

  if (loading) return <div>loading...</div>

  return (
    <header className="bg-ebonyClay-800 bg-opacity-50 backdrop-filter backdrop-blur sticky top-0 z-30 h-[72px] w-full border-b border-ebonyClay-600 shadow">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
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
                <IconButton Icon={<HiOutlineBell className="text-3xl" />} />
                <IconButton Icon={<HiOutlineCog className="text-3xl" />} />
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
      </div>
    </header>
  )
}

export default Navbar
