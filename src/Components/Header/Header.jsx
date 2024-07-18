import React, { useState, useRef, useLayoutEffect } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { BellIcon } from '@heroicons/react/24/outline'

import withSideBarToggle from '../HOCs/withSideBarToggle'

function Header({ isSideBarOpen, sidebarToggleBtn }) {
  return (
    <div className='flex items-center justify-between h-20 w-full bg-white border-b z-50'>
      <div className="p-5 w-full">
        <div className="flex gap-x-3.5 md:gap-x-5 z-50">
          <div onClick={sidebarToggleBtn} className="flex-center w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-full cursor-pointer z-50">
            <Bars3Icon className='w-6 h-6 md:w-7 md:h-7' />
          </div>
          <div className="flex-center w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-full cursor-pointer">
            <BellIcon className='w-6 h-6 md:w-7 md:h-7' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withSideBarToggle(Header);