import React, { useEffect, useState } from 'react'
import DeleteModal from '../DeleteModal/DeleteModal'
import EditModal from "../EditModal/EditModal"
import ErrorBox from '../ErrorBox/ErrorBox'
import toast from 'react-hot-toast';
import { FileInput, Label } from "flowbite-react";



export default function ProductsTable() {

    const [isShowModal, setIsShowDeleteModal] = useState(false)
    const [isShowEditModal, setIsShowEditModal] = useState(false)
    const [isShowToast, setIsShowToast] = useState(true)
    const [allProducts, setAllProducts] = useState([])
    const [productId, setProductId] = useState(null)

    const [productNewTitle, setProductNewTitle] = useState("");
    const [productNewPrice, setProductNewPrice] = useState("");
    const [productNewCount, setProductNewCount] = useState("");
    const [productNewImg, setProductNewImg] = useState("");
    const [productNewPopularity, setProductNewPopularity] = useState("");
    const [productNewSale, setProductNewSale] = useState("");
    const [productNewColors, setProductNewColors] = useState("");

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

        const productsNewInfos = {
            title: productNewTitle,
            price: productNewPrice,
            count: productNewCount,
            img: productNewImg,
            popularity: productNewPopularity,
            sale: productNewSale,
            colors: productNewColors,
        }

        fetch(`http://localhost:3000/api/products/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productsNewInfos)
        }).then(res => res.json())
            .then(result => {
                getAllProducts()
                setIsShowEditModal(false)
                { toast.success("محصول با موفقیت ویرایش شد.") }
            })
            .catch(err => toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `))
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
                                            {product.price.toLocaleString()} تومان
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            {product.count}
                                        </td>
                                        <td className="px-6 py-4 child:mx-1.5 max-w-[120px]">
                                            <button type="button" onClick={() => {
                                                setIsShowDeleteModal(true)
                                                setProductId(product.id)
                                            }} className="min-w-[67px] px-3 py-2 mt-2 font-Estedad300 text-sm text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none">حذف</button>
                                            <button type="button"
                                                onClick={() => {
                                                    setProductId(product.id)
                                                    setIsShowEditModal(true);
                                                    setProductNewTitle(product.title)
                                                    setProductNewPrice(product.price)
                                                    setProductNewCount(product.count)
                                                    setProductNewImg(product.img)
                                                    setProductNewPopularity(product.popularity)
                                                    setProductNewSale(product.sale)
                                                    setProductNewColors(product.colors)
                                                }}
                                                className="min-w-[67px] px-3 py-2 mt-2 font-Estedad300 text-sm text-center text-white bg-[#4880FF] hover:bg-[#416dd3] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">ویرایش</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div >

                    :

                    <ErrorBox msg={'محصولی یافت نشد !'} />

            }

            {isShowModal && <DeleteModal DeleteModalCancelAction={DeleteModalCancelAction} DeleteModalSubmitAction={DeleteModalSubmitAction} />}
            {
                isShowEditModal &&
                <EditModal
                    onClose={() => setIsShowEditModal(false)}
                    onSubmit={updateProductInfos}
                >
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">عنوان محصول</label>
                        <input
                            value={productNewTitle}
                            onChange={(event) => setProductNewTitle(event.target.value)}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={productNewTitle} required />
                    </div>
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">قیمت محصول</label>
                        <input
                            value={productNewPrice.toLocaleString()}
                            onChange={(event) => setProductNewPrice(event.target.value)}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={productNewPrice} required />
                    </div>
                    <div>
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">موجودی محصول</label>
                        <input
                            value={productNewCount}
                            onChange={(event) => setProductNewCount(event.target.value)}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={productNewCount} required />
                    </div>
                    <div className="flex-col w-full items-center justify-center">
                        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">عکس محصول</label>
                        <Label
                            htmlFor="dropzone-file"
                            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                <svg
                                    className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span className="font-semibold">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div>
                            <FileInput onChange={(e) => {
                                setProductNewImg(`/img/${e.nativeEvent.target.files[0].name}`)
                                console.log(e.nativeEvent.target.files[0].name);
                            }} id="dropzone-file" className="hidden" />
                        </Label>
                    </div>
                </EditModal>
            }
        </>
    )
}
