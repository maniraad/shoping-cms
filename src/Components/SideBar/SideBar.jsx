import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon } from '@heroicons/react/24/solid'
import { UsersIcon } from '@heroicons/react/24/solid'
import { Squares2X2Icon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { TicketIcon } from '@heroicons/react/24/solid'

export default function SideBar() {
    return (
        <div className="fixed w-[15%] h-screen flex-1 bg-white">

            <h1 className="text-center h-20 text-zinc-900 text-xl py-6 font-Estedad700">به داشبورد  خود خوش آمدید</h1>

            <ul className="text-zinc-700 p-4 space-y-3.5">
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5 bg-[#4880FF] text-white'>
                    <HomeIcon className='w-6 h6' />
                    <a href="#">صفحه اصلی</a>
                </li>
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <Squares2X2Icon className='w-6 h6' />
                    <a href="#">محصولات</a>
                </li>
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <EnvelopeIcon className='w-6 h6' />
                    <a href="#">کامنت ها</a>
                </li>
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <UsersIcon className='w-6 h6' />
                    <a href="#">کاربران</a>
                </li>
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <ShoppingBagIcon className='w-6 h6' />
                    <a href="#">سفارشات</a>
                </li>
                <li className='flex rounded-lg px-3 h-12 items-center cursor-pointer text-xl gap-2.5'>
                    <TicketIcon className='w-6 h6' />
                    <a href="#">تخفیف ها</a>
                </li>
            </ul>

        </div>
    )
}