import React, { useEffect } from 'react'

export default function EditCommentBtn({ onClose, onSubmitRemove, onSubmitEdit, onSubmitAnswer, onSubmitAccept }) {

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
                    <button onClick={onClose} type="button" className="end-2.5 mt-2 mr-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center" data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                            </button>
                        <div className="px-4 pb-4 pt-2 md:pt-2.5 md:pb-5 md:px-5">
                            

                            <div className="space-y-5" action="#">
                                <button type="submit" onClick={onSubmitRemove} className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">حذف </button>
                                <button type="submit" onClick={onSubmitEdit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">ویرایش </button>
                                <button type="submit" onClick={onSubmitAnswer} className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">پاسخ </button>
                                <button type="submit" onClick={onSubmitAccept} className="w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">تایید </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
