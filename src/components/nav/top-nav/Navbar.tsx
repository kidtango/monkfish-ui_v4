import React, {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
} from 'react'

import { useRouter } from 'next/router'
import { HiOutlineCog, HiOutlineBell } from 'react-icons/hi'
// import { useSession, signout } from 'next-auth/client'

import LoginButton from 'src/components/auth/login-button/LoginButton'
import Button from 'src/components/buttons/Button'

// import UserMenu from '../user-menu/UserMenu'
import IconButton from '../../buttons/IconButton'
import MonkfishLogo from './MonkfishLogo'
import ToggleMenuButton from './ToggleMenuButton'

interface INavbar {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar: React.FC<INavbar> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  // const [session, loading] = useSession()
  const router = useRouter()
  const session = true

  // useEffect(() => {
  //   if (session) {
  //     localStorage.setItem('token', session.token)
  //   } else {
  //     localStorage.clear()
  //   }
  // }, [session])

  // if (loading) return <div>loading...</div>

  const handleClick = (e: SyntheticEvent) => {
    e.preventDefault()
    router.push('/new-post')
  }

  return (
    <header className="bg-catskill-white-50 bg-opacity-50 backdrop-filter backdrop-blur sticky top-0 z-30 h-[72px] w-full border-b border-catskill-white-500 shadow items-center flex">
      <div className="container mx-auto">
        <div className="flex items-center justify-between ">
          {/* mobile navbar */}

          {/* Navbar left */}
          <div className="flex items-center">
            {/* Toggle Sidebar Button */}
            {/* <ToggleMenuButton
              onClick={setIsSidebarOpen}
              isSidebarOpen={isSidebarOpen}
            /> */}
            <MonkfishLogo />
          </div>

          {/* Navbar Right */}
          {session ? (
            <div className="flex items-center space-x-2">
              <span className="hidden sm:block">
              </span>
              <div className="hidden space-x-1 md:flex">
                <IconButton Icon={<HiOutlineBell className="text-3xl" />} />
                <IconButton Icon={<HiOutlineCog className="text-3xl" />} />
              </div>
              <div className="mt-1">
                {/* <UserMenu session={session!} signout={signout} /> */}
              </div>
            </div>
          ) : (
            <div className="">
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
