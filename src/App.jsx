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

      <div className="flex-[4] fixed left-0 w-full xl:w-[85%]">
        <Header />
        {router}
      </div>
    </>
  )
}

export default App
