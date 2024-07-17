import React, { useContext } from 'react'
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

    const sidBarTabToggle = (tabName) => contextData.setSidBarTab(tabName)

    return (
        <div className={`fixed ${contextData.isSideBarOpen ? `xl:w-[15%] ` : `hidden xl:inline-block w-auto mt-20`} h-screen flex-1 bg-white border-l-2 transition-all`}>

            {contextData.isSideBarOpen && <h1 className="hidden xl:block text-center h-20 text-zinc-900 text-xl py-6 font-Estedad700 transition-all">پنل مدیریت</h1>}

            <ul className="text-zinc-700 p-4 space-y-3.5 mt-20 xl:mt-0">
                <Link onClick={() => sidBarTabToggle('home')} to="" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'home' && `bg-[#4880FF] text-white`}`}>
                    <HomeIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>صفحه اصلی</span>}
                </Link>
                <Link onClick={() => sidBarTabToggle('products')} to="products" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'products' && `bg-[#4880FF] text-white`}`}>
                    <Squares2X2Icon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>محصولات</span>}
                </Link>
                <Link onClick={() => sidBarTabToggle('comments')} to="comments" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'comments' && `bg-[#4880FF] text-white`}`}>
                    <EnvelopeIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>کامنت ها</span>}
                </Link>
                <Link onClick={() => sidBarTabToggle('users')} to="users" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'users' && `bg-[#4880FF] text-white`}`}>
                    <UsersIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>کاربران</span>}
                </Link>
                <Link onClick={() => sidBarTabToggle('orders')} to="orders" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'orders' && `bg-[#4880FF] text-white`}`}>
                    <ShoppingBagIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>سفارشات</span>}
                </Link>
                <Link onClick={() => sidBarTabToggle('offs')} to="offs" className={`flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 ${contextData.sidBarTab === 'offs' && `bg-[#4880FF] text-white`}`}>
                    <TicketIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    {contextData.isSideBarOpen && <span className='hidden xl:inline-block'>تخفیف ها</span>}
                </Link>
            </ul>

        </div>
    )
}