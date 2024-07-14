import React from "react"
import Header from "./Components/Header/Header"
import SideBar from "./Components/SideBar/SideBar"

function App() {

  return (
    <>
      <SideBar />

      <div className="flex-[4] fixed left-0 w-full xl:w-[85%]">
        <Header />
        {/* Router */}
      </div>
    </>
  )
}

export default App
