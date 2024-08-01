import React, { useState, useEffect } from 'react'
import QuestionModal from '../QuestionModal/QuestionModal';
import ErrorBox from '../ErrorBox/ErrorBox'

import toast from 'react-hot-toast';

export default function Offs() {

  const [allOffs, setAllOffs] = useState('')
  const [offId, setOffId] = useState(null)
  const [isShowActiveModal, setIsShowActiveModal] = useState('')
  const [isShowDeleteModal, setIsShowDeleteModal] = useState('')
  const [isActive, setIsActive] = useState('')

  useEffect(() => {
    getAllOffs()
  }, [])

  const getAllOffs = () => {
    fetch("http://localhost:3000/api/offs")
      .then(res => res.json())
      .then(users => setAllOffs(users));
  }

  const activeOff = () => {
    fetch(`http://localhost:3000/api/offs/active-off/${offId}/${!isActive}`, {
      method: 'PUT'
    })
      .then(res => {
        res.json()
        setIsShowActiveModal(false);
      })
      .then(result => {
        getAllOffs()
        { toast.success(isActive ? "تخفیف با موفقیت غیر فعال شد" : "تخفیف با موفقیت فعال شد") }
      })
      .catch(err => toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `))
  }

  const deleteOff = () => {
    fetch(`http://localhost:3000/api/offs/${offId}`, {
      method: 'DELETE'
    })
      .then(res => {
        res.json()
        setIsShowDeleteModal(false);
      })
      .then(result => {
        getAllOffs()
        { toast.success("تخفیف با موفقیت حذف شد.") }
      })
      .catch(err => toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `))
  }

  return (
    <>
      {
        allOffs.length ?
          <div className="mb-5 sm:mb-7 md:mb-12">
            <div className="relative overflow-x-auto bg-white rounded-md sm:rounded-xl shadow-md">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3"> نام محصول </th>
                    <th scope="col" className="px-6 py-3">تخفیف محصول</th>
                    <th scope="col" className="px-6 py-3">کد تخفیف</th>
                    <th scope="col" className="px-6 py-3"></th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>

                  {allOffs.map(off => (
                    <tr className="bg-white border-b" key={off.id}>
                      <td className="px-6 py-4 font-semibold text-gray-900 ">{off.productID}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900 ">% {off.percent}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900 ">{off.code}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900 ">
                        <button onClick={() => {
                          setIsShowDeleteModal(true)
                          setIsActive(Number(off.isActive))
                          setOffId(off.id)
                        }}
                          type="button" className="min-w-[67px] px-3 py-2 mt-2 font-Estedad300 text-sm text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none">{off.isActive ? 'غیر فعال کردن تخفیف' : 'فعال کردن تخفیف'}</button>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 ">
                        <button onClick={() => {
                          setIsShowDeleteModal(true)

                          setOffId(off.id)
                        }}
                          type="button" className="min-w-[67px] px-3 py-2 mt-2 font-Estedad300 text-sm text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none">حذف</button>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div >
          :
          <ErrorBox msg={'تخفیفی یافت نشد !'} />
      }

      {isShowActiveModal
        &&
        (
          <QuestionModal
            SubmitAction={activeOff}
            onClose={() => setIsShowActiveModal(false)}
            child={isActive ? 'آیا از غیر فعال کردن تخفیف اطمینان دارید؟' : 'آیا از  فعال کردن تخفیف اطمینان دارید؟'}
          />
        )
      }
      {isShowDeleteModal
        &&
        (
          <QuestionModal
            SubmitAction={deleteOff}
            onClose={() => setIsShowDeleteModal(false)}
            child={'آیا از حذف تخفیف اطمینان دارید؟'}
          />
        )
      }
    </>
  )
}
