import React from 'react'

export default function AddNewProduct() {
  return (
    <>

      <form className='bg-white p-7 rounded-xl shadow-md'>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">اسم محصول</label>
            <div className="relative">
              <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="اسم محصول را بنویسید" required />
            </div>
          </div>
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">قیمت محصول</label>
            <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="قیمت محصول را بنویسید" required />
          </div>
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">موجودی محصول</label>
            <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="موجودی محصول را بنویسید" required />
          </div>
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">عکس محصول</label>
            <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="ادرس عکس محصول را بنویسید" required />
          </div>
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">محبوبیت محصول</label>
            <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="میزان محبوبیت محصول را بنویسید" required />
          </div>
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">میزان فروش محصول</label>
            <input type="text" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="میزان فروش محصول را بنویسید" required />
          </div>
          <div>
            <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900">رنگ بندی محصول</label>
            <input type="number" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="تعداد رنگ بندی محصول را بنویسید" required />
          </div>
        </div>
        <button type="submit" className="text-white bg-[#4880FF] hover:bg-[#416dd3] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">ثبت محصول</button>
      </form>

    </>
  )
}
