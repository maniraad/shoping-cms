import React, { useEffect, useState } from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import QuestionModal from '../QuestionModal/QuestionModal';
import EditModal from '../EditModal/EditModal';

import toast from 'react-hot-toast';

export default function Users() {

  const [allUsers, setAllUsers] = useState('')
  const [userId, setUserId] = useState(null)
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowEditModal, setIsShowEditModal] = useState(false)
  const [firsname, setFistname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddres] = useState('')
  const [score, setScore] = useState('')
  const [buy, setBuy] = useState('')

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = () => {
    fetch("http://localhost:3000/api/users")
      .then(res => res.json())
      .then(users => setAllUsers(users));
  }

  const deleteUserAction = () => {
    fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        setIsShowDeleteModal(false);
        getAllUsers()
        { toast.success("کامنت با موفقیت حذف شد.") }
      })
      .catch(err => toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `))
  }

  const updateUserInfos = () => {

    const newUserInfos = {
      firsname,
      lastname,
      username,
      password,
      phone,
      city,
      email,
      address,
      score,
      buy,
    }

    fetch(`http://localhost:3000/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserInfos),
    }).then(res => {
      setIsShowEditModal(false);
      res.json()
    })
      .then(result => {
        getAllUsers()
        { toast.success("کامنت با موفقیت ویرایش شد.") }
      })
      .catch(err => toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `))
  }


  return (
    <>
      {allUsers.length ?

        <div className="mb-5 sm:mb-7 md:mb-12">
          <div className="relative overflow-x-auto bg-white rounded-md sm:rounded-xl shadow-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3"> نام و نام خانوادگی </th>
                  <th scope="col" className="px-6 py-3">نام کاربری</th>
                  <th scope="col" className="px-6 py-3">رمز عبور</th>
                  <th scope="col" className="px-6 py-3">شماره تماس</th>
                  <th scope="col" className="px-6 py-3">ایمیل</th>
                  <th scope="col" className="px-6 py-3"></th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map(user => (
                  <tr className="bg-white border-b" key={user.id}>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">{user.firsname} {user.lastname}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">{user.username}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">{user.password}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">{user.phone}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">{user.email}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                      <button onClick={() => {
                        setIsShowDeleteModal(true)
                        setUserId(user.id)
                      }}
                        type="button" className="min-w-[67px] px-3 py-2 mt-2 font-Estedad300 text-sm text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none">حذف کاربر</button>
                    </td>
                    <td className="px-6 py-4 child:mx-1.5 max-w-[120px]">
                      <button onClick={() => {
                        setUserId(user.id)
                        setIsShowEditModal(true)
                        setFistname(user.firsname)
                        setLastname(user.lastname)
                        setUsername(user.username)
                        setPassword(user.password)
                        setPhone(user.phone)
                        setCity(user.city)
                        setEmail(user.email)
                        setAddres(user.address)
                        setScore(user.score)
                        setBuy(user.buy)
                      }} type="button" className="min-w-[67px] px-3 py-2 mt-2 font-Estedad300 text-sm text-center text-white bg-[#4880FF] hover:bg-[#416dd3] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">ویرایش کاربر </button>
                    </td>

                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div >
        :
        <ErrorBox msg={'کاربری یافت نشد !'} />
      }

      {isShowDeleteModal
        &&
        (
          <QuestionModal
            SubmitAction={deleteUserAction}
            onClose={() => setIsShowDeleteModal(false)}
            child={'آیا از حذف کاربر اطمینان دارید؟'}     
                 />
        )
      }

      {isShowEditModal
        &&
        (
          <EditModal
            onSubmit={updateUserInfos}
            onClose={() => setIsShowEditModal(false)}
          >

            <div>
              <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">نام کاربر</label>
              <input
                value={firsname}
                onChange={(event) => setFistname(event.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={firsname} required />
            </div>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">نام خانوادگی کاربر</label>
              <input
                value={lastname}
                onChange={(event) => setLastname(event.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={lastname} required />
            </div>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">نام کاربری کاربر</label>
              <input
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={username} required />
            </div>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">شماره تماس کاربر</label>
              <input
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={phone} required />
            </div>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">رمز عبور کاربر</label>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={password} required />
            </div>

          </EditModal>
        )
      }
    </>
  )
}
