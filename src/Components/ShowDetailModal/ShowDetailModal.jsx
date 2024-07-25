import React, { useEffect } from 'react'

export default function ShowDetailModal({ onClose, commentBody }) {

    useEffect(() => {
        const checkKey = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };

        window.addEventListener("keydown", checkKey);

        return () => window.removeEventListener('keydown', checkKey)
    });

    return (
        <div onClick={onClose} className="w-full h-full z-50">
            <div tabIndex="-1" aria-hidden="true" className="flex-center bg-black/20 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-72 max-h-full">
                    <div onClick={(e) => e.stopPropagation()} className="relative bg-white rounded-lg shadow ">
                        <div className="">
                            <button onClick={onClose} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                            <p onClick={() => onSubmitRemove} className="w-full text-base md:text-lg text-center px-6 pb-6 md:px-7 md:pb-7">{commentBody}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
