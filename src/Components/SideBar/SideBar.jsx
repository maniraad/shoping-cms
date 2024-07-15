import React from 'react'
import { Link } from 'react-router-dom'

import { HomeIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { UsersIcon } from '@heroicons/react/24/solid'
import { Squares2X2Icon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { TicketIcon } from '@heroicons/react/24/solid'

export default function SideBar() {
    return (
        <div className="fixed xl:w-[15%] h-screen flex-1 bg-white border-l-2">

            <h1 className="hidden xl:block text-center h-20 text-zinc-900 text-xl py-6 font-Estedad700">پنل مدیریت</h1>

            <ul className="text-zinc-700 p-4 space-y-3.5 mt-20 xl:mt-0">
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 bg-[#4880FF] text-white'>
                    <HomeIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    <Link to="" className='hidden xl:inline-block'>صفحه اصلی</Link>
                </li>
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <Squares2X2Icon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    <Link to="products" className='hidden xl:inline-block'>محصولات</Link>
                </li>
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <EnvelopeIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    <Link to="comments" className='hidden xl:inline-block'>کامنت ها</Link>
                </li>
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <UsersIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    <Link to="users" className='hidden xl:inline-block'>کاربران</Link>
                </li>
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <ShoppingBagIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    <Link to="orders" className='hidden xl:inline-block'>سفارشات</Link>
                </li>
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <TicketIcon className='w-[18px] h-[18px] md:w-5 md:h-5 xl:w-6 xl:h-6' />
                    <Link to="offs" className='hidden xl:inline-block'>تخفیف ها</Link>
                </li>
            </ul>

        </div>
    )
}