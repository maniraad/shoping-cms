import React, { useState, useEffect } from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import MoreCommentBtn from '../MoreCommentBtn/MoreCommentBtn';
import ShowDetailModal from '../ShowDetailModal/ShowDetailModal';
import QuestionModal from '../QuestionModal/QuestionModal';
import EditModal from '../EditModal/EditModal';

import toast from 'react-hot-toast';

export default function Comments() {

  const [allComments, setAllComments] = useState([]);
  const [commentId, setCommentId] = useState(null)
  const [isAcceptComment, setIsAcceptComment] = useState(null)
  const [isShowMoreBtn, setIsShowMoreBtn] = useState(false);
  const [isShowDetailModal, setIsShowDetailModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState(false);

  useEffect(() => {
    getAllComments()
  }, [])

  const getAllComments = () => {
    fetch("http://localhost:3000/api/comments")
      .then(res => res.json())
      .then(comments => setAllComments(comments));
  }

  const DeleteModalSubmitAction = () => {
    fetch(`http://localhost:3000/api/comments/${commentId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        setIsShowDeleteModal(false);
        getAllComments()
        { toast.success("کامنت با موفقیت حذف شد.") }
      })
      .catch(err => toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `))
  }

  const updateCommentBody = () => {
    fetch(`http://localhost:3000/api/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: mainCommentBody,
      }),
    }).then(res => {
      console.log(mainCommentBody);
      res.json()
    })
      .then(result => {
        setIsShowEditModal(false);
        getAllComments()
        { toast.success("کامنت با موفقیت ویرایش شد.") }
      })
      .catch(err => {
        console.log(err);
        toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `)
      })
  }

  const acceptComment = () => {
    fetch(`http://localhost:3000/api/comments/accept/${commentId}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(result => {
        setIsShowAcceptModal(false);
        getAllComments()
        { toast.success("کامنت با موفقیت تایید شد.") }
      })
      .catch(err => {
        setIsShowAcceptModal(false);
        toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `)
      })
  }

  const rejectComment = () => {
    fetch(`http://localhost:3000/api/comments/reject/${commentId}`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(result => {
        setIsShowAcceptModal(false);
        getAllComments()
        { toast.success("کامنت با موفقیت رد شد.") }
      })
      .catch(err => {
        setIsShowAcceptModal(false);
        toast.error(` مشکلی رخ داده است. لطفا بعدا امتحان کنید. `)
      })
  }

  return (
    <>
      {allComments.length ?

        <div className="mb-5 sm:mb-7 md:mb-12">
          <div className="relative overflow-x-auto bg-white rounded-md sm:rounded-xl shadow-md">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">اسم کاربر</th>
                  <th scope="col" className="px-6 py-3">محصول</th>
                  <th scope="col" className="px-6 py-3">کامنت</th>
                  <th scope="col" className="px-6 py-3">تاریخ</th>
                  <th scope="col" className="px-6 py-3">ساعت</th>
                  <th scope="col" className="px-6 py-3">بیشتر</th>
                </tr>
              </thead>
              <tbody>
                {allComments.map(comment => (

                  <tr className="bg-white border-b" key={comment.id}>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">{comment.userID}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">{comment.productID}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">
                      <button onClick={() => {
                        setMainCommentBody(comment.body)
                        setIsShowDetailModal(true)
                      }} type="button" className="min-w-[67px] px-3 py-2 mt-2 font-Estedad300 text-sm text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 focus:outline-none">نمایش کامنت</button>
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">{comment.date}</td>
                    <td className="px-6 py-4 font-semibold text-gray-900 ">{comment.hour}</td>
                    <td className="px-6 py-4 child:mx-1.5 max-w-[120px]">
                      <button type="button" onClick={() => {
                        setIsShowMoreBtn(true)
                        setCommentId(comment.id)
                        setMainCommentBody(comment.body)
                        setIsAcceptComment(Boolean(comment.isAccept))
                      }} className="min-w-[67px] px-3 py-2 mt-2 font-Estedad300 text-sm text-center text-white bg-[#4880FF] hover:bg-[#416dd3] rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300">بیشتر ...</button>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
        </div>

        :

        <ErrorBox msg={'پیغامی یافت نشد !'} />
      }

      {
        isShowMoreBtn
        &&
        (
          <MoreCommentBtn
            onClose={() => setIsShowMoreBtn(false)}
            onSubmitRemove={() => {
              setIsShowMoreBtn(false)
              setIsShowDeleteModal(true)
            }}
            onSubmitEdit={() => {
              setIsShowMoreBtn(false)
              setIsShowEditModal(true)
            }}
            onSubmitAnswer={() => {
              setIsShowMoreBtn(false)
              setIsShowDeleteModal(true)
            }}
            onSubmitAccept={() => {
              setIsShowMoreBtn(false)
              setIsShowAcceptModal(true)
            }}
            isAccept={isAcceptComment}
          />
        )
      }

      {
        isShowDetailModal
        &&
        (
          <ShowDetailModal
            commentBody={mainCommentBody}
            onClose={() => setIsShowDetailModal(false)}
          />
        )
      }

      {
        isShowDeleteModal &&
        (
          <QuestionModal SubmitAction={DeleteModalSubmitAction} onClose={() => setIsShowDeleteModal(false)} child={"آیا از  حذف کامنت اطمینان دارید؟"} />
        )
      }

      {
        isShowAcceptModal &&
        (
          <QuestionModal SubmitAction={!isAcceptComment ? acceptComment : rejectComment} onClose={() => setIsShowAcceptModal(false)} child={`آیا از  ${!isAcceptComment ? `تایید` : `رد`} کردن کامنت اطمینان دارید؟`} />
        )
      }

      {
        isShowEditModal &&
        (
          <EditModal
            onClose={() => setIsShowEditModal(false)}
            onSubmit={updateCommentBody}
            children={
              <textarea
                value={mainCommentBody}
                onChange={e => { setMainCommentBody(e.target.value) }}
                rows="4"
                cols="50"
                autoFocus
                className='w-full resize-none border-none outline-none'>
              </textarea>
            }
          />
        )
      }
    </>
  )
}
