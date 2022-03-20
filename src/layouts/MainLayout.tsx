import React, { useState, ReactNode } from 'react'

import SideNav from 'src/components/nav/side-nav/SideNav'
import Navbar from 'src/components/nav/top-nav/Navbar'

const MainLayout: React.FC<ReactNode> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)
  return (
    <div className='flex flex-col'>
      <Navbar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={toggleSidebar} />
      <div className='container mx-auto'>
        {/* <div className="sticky z-30 top-20">
          <SideNav
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div> */}
        <main>
          <div className={'flex min-w-full bg-catskill-white'}>
            <div className={'flex-1 max-h-full p-0 sm:p-4 sm:ml-0 lg:ml-24'}>
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout
