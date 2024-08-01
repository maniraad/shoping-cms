import React, { useEffect } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { BellIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

import withSideBarToggle from '../HOCs/withSideBarToggle'

function Header({ setIsSideBarOpen, isSideBarOpen, sidebarToggleBtn }) {

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsSideBarOpen(true)
    } else {
      setIsSideBarOpen(false)
    }
  }, [])

  return (
    <div className='flex items-center justify-between h-20 w-full bg-white border-b z-50'>
      <div className="p-5 w-full flex justify-between items-center">
        <div className="flex gap-x-3.5 md:gap-x-5 z-50">
          <div onClick={sidebarToggleBtn} className="flex-center w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-full cursor-pointer z-50">
            <Bars3Icon className='w-6 h-6 md:w-7 md:h-7' />
          </div>
          <div className="flex-center w-12 h-12 md:w-14 md:h-14 bg-gray-100 rounded-full cursor-pointer">
            <BellIcon className='w-6 h-6 md:w-7 md:h-7' />
          </div>
        </div>
        <div class=" ml-4 flex items-center gap-x-2.5 md:gap-x-5">
          <div class="relative cursor-pointer">
            <span class="relative flex items-center gap-x-1 md:gap-x-2 z-50">
              <span className='shrink-0'>
                <img src="https://secure.gravatar.com/avatar/c37423a5808f5ab4a5347033b5e16221?s=96&amp;d=mm&amp;r=g" alt="admin" class="object-cover w-10 h-10 md:w-14 md:h-14 rounded-full inline-block" loading="lazy" />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>

    //  <header class="bg-neutral-50 shadow-md fixed top-0 left-0 w-full z-50">
    //   <div class="container-2">
    //       <div class="flex flex-col md:flex-row justify-between items-center">
    //           <div class="flex-center w-full md:w-auto py-2.5 md:py-0 md:h-28 mx-6 lg:mx-14 border-b md:border-none">
    //               <a href="../index.html">
    //                   <img src="../images/logo/Logo.png" alt="Logo"/>
    //               </a>
    //           </div>
    //           <div class="w-full md:w-auto py-2.5 md:py-0 flex flex-wrap justify-between items-center grow z-50">
    //               <div class="flex flex-wrap items-center gap-x-4">
    //                   <div class="menu-btn cursor-pointer">
    //                       <svg class="w-7 md:w-9 h-7 md:h-9 transition-all">
    //                           <use href="#menu-bars"></use>
    //                       </svg>
    //                   </div>
    //                   <div class="relative group hidden lg:block z-50" id="searchbox">
    //                       <form class="hidden xl:block" action="" method="get">
    //                           <label class="relative h-14 block transition-all">
    //                               <input id="search-input"
    //                                   class="rounded-full text-slate-500 placeholder:text-slate-500 w-48 focus:w-64 h-full border border-transparent hover:border-gray-200 focus:border-gray-300 outline-none focus:text-zinc-700  bg-gray-100 text-base placeholder:text-lg pl-14 pr-5 block transition-all"
    //                                   name="s" type="text" placeholder="جستجو"/>
    //                               <button id="search-btn"
    //                                   class="absolute left-5 top-0 bottom-0 w-7 h-7 my-auto text-slate-500"
    //                                   type="submit" role="button">
    //                                   <svg class="w-7 h-7">
    //                                       <use xlink:href="#search"></use>
    //                                   </svg>
    //                               </button>
    //                           </label>
    //                       </form>
    //                       <div class="xl:hidden">
    //                           <div
    //                               class="searchbox flex-center w-14 h-14 rounded-full bg-gray-100 transition-colors cursor-pointer">
    //                               <svg class="w-6 h-6 text-slate-500">
    //                                   <use xlink:href="#search"></use>
    //                               </svg>
    //                           </div>
    //                           <div class="absolute -left-24 top-full pt-4 z-10 transition-all hide"
    //                               id="searchbox-dropdown">
    //                               <form action="" method="get">
    //                                   <label class="relative block w-64">
    //                                       <input
    //                                           class="w-full h-16 pr-7 pl-10 text-lg bg-white placeholder:text-slate-500 text-zinc-700 outline-none rounded-2xl"
    //                                           type="text" name="s" placeholder="جستجو در بین دوره ها"/>
    //                                       <button
    //                                           class="absolute left-0 top-0 bottom-0 w-12 h-full my-auto text-slate-500"
    //                                           type="submit" role="button">
    //                                           <svg class="ml-2 w-6 h-6">
    //                                               <use xlink:href="#search"></use>
    //                                           </svg>
    //                                       </button>
    //                                   </label>
    //                               </form>
    //                           </div>
    //                       </div>
    //                   </div>
    //               </div>

    //               <div class=" ml-4 flex items-center gap-x-2.5 md:gap-x-5">
    //                   <div class="cursor-pointer">
    //                       <div class="notification-icon relative transition-all">
    //                           <svg class="w-5 md:w-6 h-5 md:h-6">
    //                               <use xlink:href="#bell"></use>
    //                           </svg>

    //                           <div
    //                               class="notification-menu absolute invisible opacity-0 -top-10 left-0 mt-4 flex max-h-[415px] w-52 md:w-64 lg:w-80 flex-col border shadow-sm bg-white rounded-lg cursor-auto duration-200 transition-all">
    //                               <div class="p-4">
    //                                   <h5 class="notification-header text-sm font-medium text-bodydark2"></h5>
    //                               </div>
    //                               <ul class="notifications-wrapper flex h-auto flex-col overflow-y-auto">
    //                               </ul>
    //                           </div>
    //                       </div>
    //                   </div>
    //                   <div class="relative cursor-pointer">
    //                       <span class="relative flex items-center gap-x-1.5 md:gap-x-3 z-50 profile">
    //                           <span class="flex items-center gap-x-1.5">
    //                               <svg class=" profile-icon w-4 h-4 transition-all duration-300">
    //                                   <use href="#chevron-down"></use>
    //                               </svg>
    //                               <span class="admin-name hidden md:inline-block"></span>
    //                           </span>
    //                           <span>
    //                               <img
    //                                   class="admin-img object-cover w-10 h-10 md:w-12 md:h-12 rounded-full inline-block cursor-pointer"/>
    //                           </span>
    //                       </span>
    //                       <div
    //                           class="profile-menu absolute invisible opacity-0 -top-14 left-0 mt-4 flex w-60 flex-col rounded-lg border bg-white shadow-sm duration-300 transition-all">
    //                           <div class="p-5 border-b">
    //                               <h5 class="text-base mb-2 font-EstedadMedium text-zinc-900"><a class="admin-name " href="#"> </a></h5>
    //                               <a class="admin-email block text-sm text-slate-600" href="#">mailnam@mail.com</a>
    //                           </div>
    //                           <ul class="flex flex-col gap-5 border-b px-6 py-7">
    //                               <li>
    //                                   <a href=""
    //                                       class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
    //                                       <svg class="w-5 md:w-6 h-5 md:h-6">
    //                                           <use xlink:href="#user"></use>
    //                                       </svg>
    //                                       پروفایل من 
    //                                   </a>
    //                               </li>
    //                               <li>
    //                                   <a href=""
    //                                       class="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base">
    //                                       <svg class="w-5 md:w-6 h-5 md:h-6">
    //                                           <use xlink:href="#bell"></use>
    //                                       </svg>
    //                                       پروفایل من 
    //                                   </a>
    //                               </li>
    //                           </ul>
    //                           <button id="logout-btn"
    //                               class="flex items-center gap-3.5 px-6 py-4 text-sm font-EstedadMedium duration-300 ease-in-out hover:text-red-600 lg:text-base">
    //                               <svg class="w-5 md:w-6 h-5 md:h-6">
    //                                   <use xlink:href="#arrow-left-start-on-rectangle"></use>
    //                               </svg>
    //                               خروج
    //                           </button>
    //                       </div>
    //                   </div>
    //               </div>
    //           </div>
    //       </div>
    //   </div>
    //   </header> 
  )
}

export default withSideBarToggle(Header);