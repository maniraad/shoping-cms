import React, { useState } from "react"
import Header from "./Components/Header/Header"
import SideBar from "./Components/SideBar/SideBar"

import DatasContext from "./Context/DatasContext";

import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {

  const router = useRoutes(routes)
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [sidBarTab, setSidBarTab] = useState('home')

  return (
    <>
      <DatasContext.Provider value={{ isSideBarOpen, setIsSideBarOpen, sidBarTab, setSidBarTab }}>

        <SideBar />
        <div className="fixed left-0 w-full z-50">
          <Header />
        </div>
        <div className={`lg:flex-[4] fixed left-0 w-full p-0 ${isSideBarOpen && `xl:w-[85%] p-0 lg:pr-[76px]`} mt-20 transition-all`}>
          <div className={`mt-16 px-12 ${isSideBarOpen ? `xl:mr-0` : `xl:mr-20`} transition-all`}>
            {router}
          </div>
        </div>
      </DatasContext.Provider>
    </>
  )
}

export default App