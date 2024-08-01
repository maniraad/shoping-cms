import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DatasContext from '../../Context/DatasContext'

import { HomeIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { UsersIcon } from '@heroicons/react/24/solid'
import { Squares2X2Icon } from '@heroicons/react/24/solid'
import { TicketIcon } from '@heroicons/react/24/solid'

export default function SideBar() {

    const contextData = useContext(DatasContext);

    const sidBarTabToggle = (tabName) => contextData.setSidBarTab(tabName)

    return (
        <div className={`fixed ${contextData.isSideBarOpen ? `min-w-40 md:min-w-52 xl:w-72 ` : `hidden xl:inline-block w-auto`} xl:mt-20  h-screen flex-1 bg-white border-l-2 transition-all z-50`}>

            <ul className="text-zinc-700 p-4 space-y-3.5 mt-20 xl:mt-0">
                <Link onClick={() => sidBarTabToggle('home')} to="" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'home' && `bg-[#4880FF] text-white`} transition-all`}>
                    <HomeIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='inline-block text-sm md:text-base xl:text-xl'>صفحه اصلی</span>}
                </Link>
                <Link onClick={() => sidBarTabToggle('products')} to="products" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'products' && `bg-[#4880FF] text-white`} transition-all`}>
                    <span><Squares2X2Icon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' /></span>
                    {contextData.isSideBarOpen && <span className='inline-block text-sm md:text-base xl:text-xl'>محصولات</span>}
                </Link>
                <Link onClick={() => sidBarTabToggle('comments')} to="comments" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'comments' && `bg-[#4880FF] text-white`} transition-all`}>
                    <EnvelopeIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='inline-block text-sm md:text-base xl:text-xl'>کامنت ها</span>}
                </Link>
                <Link onClick={() => sidBarTabToggle('users')} to="users" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'users' && `bg-[#4880FF] text-white`} transition-all`}>
                    <UsersIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='inline-block text-sm md:text-base xl:text-xl'>کاربران</span>}
                </Link>
                <Link onClick={() => sidBarTabToggle('offs')} to="offs" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'offs' && `bg-[#4880FF] text-white`} transition-all`}>
                    <TicketIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='inline-block text-sm md:text-base xl:text-xl'>تخفیف ها</span>}
                </Link>
            </ul>

        </div>
    )
}