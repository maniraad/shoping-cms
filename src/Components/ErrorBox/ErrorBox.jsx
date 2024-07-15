import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'

export default function ErrorBox({ msg }) {
    return (
        <>
            <div className="lg:w-full bg-white flex-center p-7 rounded-xl shadow-md">
                <div className="flex flex-col-reverse items-center gap-y-3">
                    <p className='text-2xl font-Estedad700'>{msg}</p>
                    <XCircleIcon className='text-red-600 w-16' />
                </div>
            </div>
        </>
    )
}
