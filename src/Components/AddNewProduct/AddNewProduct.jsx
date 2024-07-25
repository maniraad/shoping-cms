import React, { useState, useContext } from 'react'
import { FileInput, Label } from "flowbite-react";
import toast from 'react-hot-toast';
import useConvertToLatinNumber from "../../hooks/useConvertToLatinNumber/useConvertToLatinNumber"

export default function AddNewProduct({ getAllProducts }) {

  const [newProductTitle, setNewProductTitle] = useState('')
  const [newProductPrice, setNewProductPrice] = useState('')
  const [newProductCount, setNewProductCount] = useState('')
  const [newProductImg, setNewProductImg] = useState('')
  const [newProductPopularity, setNewProductPopularity] = useState('1')
  const [newProductSale, setNewProductSale] = useState('1')
  const [newProductColors, setNewProductColors] = useState('1')

  const newProductsInfos = {
    title: newProductTitle,
    price: useConvertToLatinNumber(newProductPrice),
    count: useConvertToLatinNumber(newProductCount),
    img: newProductImg,
    popularity: +newProductPopularity,
    sale: +newProductSale,
    colors: +newProductColors
  }

  const emptyInput = () => {
    setNewProductTitle('')
    setNewProductPrice('')
    setNewProductCount('')
    setNewProductImg('')
    setNewProductPopularity('')
    setNewProductSale('')
    setNewProductColors('')
  }

  const addNewProduct = (event) => {

    event.preventDefault()

    fetch(`http://localhost:3000/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProductsInfos)
    }).then(res => res.json())
      .then(result => {
        getAllProducts()
        emptyInput()
        { toast.success("محصول با موفقیت اضافه شد.") }
      })
      .catch(err => {
        toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `)
        emptyInput()
      })
  }

  return (
    <>

      <form className='bg-white p-7 rounded-xl shadow-md'>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">اسم محصول</label>
            <div className="relative">
              <input type="text" value={newProductTitle} onChange={(event) => setNewProductTitle(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="اسم محصول را بنویسید" required />
            </div>
          </div>
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">قیمت محصول</label>
            <input type="text" value={useConvertToLatinNumber(newProductPrice)} onChange={(event) => setNewProductPrice(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="قیمت محصول را بنویسید" required />
            <span className='text-sm xl:text-base text-gray-600'>{`${newProductPrice && `${Number(useConvertToLatinNumber(newProductPrice)).toLocaleString()} تومان`}`}</span>
          </div>
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">موجودی محصول</label>
            <input type="text" value={useConvertToLatinNumber(newProductCount)} onChange={(event) => setNewProductCount(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="موجودی محصول را بنویسید" required />
            <span className='text-sm xl:text-base text-gray-600'>{`${newProductCount && `${Number(useConvertToLatinNumber(newProductCount)).toLocaleString()} عدد`}`}</span>
          </div>
        </div>
        <div className="flex-col w-full items-center justify-center mb-6">
          <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">عکس محصول</label>
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
            <FileInput id="dropzone-file" className="hidden" onChange={(e) => setNewProductImg(`/img/${e.nativeEvent.target.files[0].name}`)} required />
          </Label>
        </div>
        <button onClick={!newProductTitle || !newProductPrice || !newProductCount || !newProductImg ? () => toast.error(` لطفا فرم را کامل پر کنید! `) : addNewProduct} type="submit" className="text-white bg-[#4880FF] hover:bg-[#416dd3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">ثبت محصول</button>
      </form>

    </>
  )
}