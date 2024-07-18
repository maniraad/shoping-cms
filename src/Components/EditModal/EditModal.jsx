import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function EditModal({ children, onClose, onSubmit }) {

    useEffect(() => {
        const checkKey = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };

        window.addEventListener("keydown", checkKey);

        return () => window.removeEventListener('keydown', checkKey)
    });

    return ReactDOM.createPortal(
        <>
            <div onClick={onClose} className="w-full h-full z-50">
                <div tabIndex="-1" aria-hidden="true" className="flex-center bg-black/20 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div onClick={(e) => e.stopPropagation()} className="relative p-4 w-full max-w-md max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    اطلاعات جدید را وارد نمایید
                                </h3>
                                <button onClick={onClose} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                </button>
                            </div>
                            <div className="p-4 md:p-5">
                                <div className="space-y-4" action="#">

                                    {children}

                                    <button onClick={onSubmit} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ثبت اطلاعات جدید</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        , document.getElementById("modals-parent")
    );
}




