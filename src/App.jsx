import React, { useState } from "react"
import Header from "./Components/Header/Header"
import SideBar from "./Components/SideBar/SideBar"

import DatasContext from "./Context/DatasContext";

import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {

  const router = useRoutes(routes)
  const [isSideBarOpen, setIsSideBarOpen] = useState(true)
  const [sidBarTab, setSidBarTab] = useState('home')

  return (
    <>
      <DatasContext.Provider value={{ isSideBarOpen, setIsSideBarOpen, sidBarTab, setSidBarTab }}>

        <SideBar />

        <div className={`lg:flex-[4] fixed left-0 w-full ${isSideBarOpen && `xl:w-[85%] pr-[74px] md:pr-[76px] xl:pr-0`}  transition-all`}>
          <Header />
          <div className={`mt-16 px-12 ${isSideBarOpen ? `mr-[74px] md:mr-[76px] xl:mr-0` : `xl:mr-20`} transition-all`}>
            {router}
          </div>
        </div>
      </DatasContext.Provider>
    </>
  )
}

export default App