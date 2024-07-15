import React from "react"
import Header from "./Components/Header/Header"
import SideBar from "./Components/SideBar/SideBar"

import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {

  const router = useRoutes(routes)

  return (
    <>
      <SideBar />

      <div className=" lg:flex-[4] fixed left-0 pr-[74px] md:pr-[76px] xl:pr-0 w-full xl:w-[85%]">
        <Header />
        <div className="mt-16 px-12">
        {router}
        </div>
      </div>
    </>
  )
}

export default App
