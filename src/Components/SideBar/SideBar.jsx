import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import DatasContext from '../../Context/DatasContext'

import { HomeIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { UsersIcon } from '@heroicons/react/24/solid'
import { Squares2X2Icon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { TicketIcon } from '@heroicons/react/24/solid'

export default function SideBar() {

    const contextData = useContext(DatasContext);

    return (
        <div className={`fixed ${contextData.isSideBarOpen ? `xl:w-[15%] ` : `w-auto mt-20`} h-screen flex-1 bg-white border-l-2`}>

            {contextData.isSideBarOpen && <h1 className="hidden xl:block text-center h-20 text-zinc-900 text-xl py-6 font-Estedad700">پنل مدیریت</h1>}

            <ul className="text-zinc-700 p-4 space-y-3.5 mt-20 xl:mt-0">
                <Link to="" className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 bg-[#4880FF] text-white'>
                    <HomeIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>صفحه اصلی</span>}
                </Link>
                <Link to="products" className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <Squares2X2Icon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>محصولات</span>}
                </Link>
                <Link to="comments" className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <EnvelopeIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>کامنت ها</span>}
                </Link>
                <Link to="users" className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <UsersIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>کاربران</span>}
                </Link>
                <Link to="orders" className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <ShoppingBagIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>سفارشات</span>}
                </Link>
                <Link to="offs" className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <TicketIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>تخفیف ها</span>}
                </Link>
            </ul>

        </div>
    )
}