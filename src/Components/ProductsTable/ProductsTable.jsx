import React, { useEffect, useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import EditModal from "../EditModal/EditModal"
import ErrorBox from '../ErrorBox/ErrorBox'
import toast, { Toaster } from 'react-hot-toast';


export default function ProductsTable() {

    const [isShowModal, setIsShowDeleteModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [isShowToast, setIsShowToast] = useState(true)
    const [allProducts, setAllProducts] = useState([])
    const [productId, setProductId] = useState(null)

    const getAllProducts = () => {
        fetch("http://localhost:3000/api/products/")
            .then(res => res.json())
            .then(products => setAllProducts(products))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const DeleteModalCancelAction = () => setIsShowDeleteModal(false)

    const DeleteModalSubmitAction = () => {
        fetch(`http://localhost:3000/api/products/${productId}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                setIsShowDeleteModal(false);
                getAllProducts()
                { toast.success("محصول با موفقیت حذف شد.") }
            })
            .catch(err => toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `))
    }

    const updateProductInfos = () => {
        console.log('محصول ویرایش شد');
    }


    return (
        <>

            {
                allProducts.length ?

                    <div className="relative overflow-x-auto bg-white rounded-md sm:rounded-xl shadow-md">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-16 py-3">
                                        <span className="sr-only">Image</span>
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        اسم
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        قیمت
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        موجودی
                                    </th>
                                    <th scope="col" className="px-6 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {allProducts.map(product => (

                                    <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="p-4">
                                            <img src={product.img} className="w-16 md:w-32 max-w-full max-h-full" alt={product.title} />
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {product.title}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {product.price} تومان
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {product.count}
                                        </td>
                                        <td className="px-6 py-4 child:mx-1.5 max-w-[120px]">
                                            <button type="button" onClick={() => {
                                                setIsShowDeleteModal(true)
                                                setProductId(product.id)
                                            }} className="min-w-[67px] px-3 py-2 mt-2 font-Estedad300 text-sm text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none">حذف</button>
                                            <button type="button" onClick={() => setIsShowEditModal(true)} className="min-w-[67px] px-3 py-2 mt-2 font-Estedad300 text-sm text-center text-white bg-[#4880FF] hover:bg-[#416dd3] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">ویرایش</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    :

                    <ErrorBox msg={'محصولی یافت نشد !'} />

            }

            {isShowModal && <DeleteModal DeleteModalCancelAction={DeleteModalCancelAction} DeleteModalSubmitAction={DeleteModalSubmitAction} />}
            {isShowEditModal &&
                <EditModal
                    onClose={() => setIsShowEditModal(false)}
                    onSubmit={updateProductInfos}
                >
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">عنوان محصول</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="عنوان جدید را وارد کنید" required />
                    </div>
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">عنوان محصول</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="عنوان جدید را وارد کنید" required />
                    </div>
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">عنوان محصول</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="عنوان جدید را وارد کنید" required />
                    </div>
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">عنوان محصول</label>
                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="عنوان جدید را وارد کنید" required />
                    </div>
                </EditModal>}
        </>
    )
}
