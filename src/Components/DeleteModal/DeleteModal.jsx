import React from 'react'
import ReactDOM from 'react-dom'

export default function DeleteModal() {
  return ReactDOM.createPortal(
    <div>DeleteModal</div>
    ,document.getElementById("modals-parent")
  )
}
