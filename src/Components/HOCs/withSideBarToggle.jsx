import React, { useContext } from "react";
import DatasContext from "../../Context/DatasContext";

function withSideBarToggle(OriginalComponent) {
    const NewComponent = () => {
        const contextData = useContext(DatasContext)

        const sidebarToggleBtn = () => contextData.setIsSideBarOpen((prevIsShow) => !prevIsShow);

        return <OriginalComponent isSideBarOpen={contextData.isSideBarOpen} setIsSideBarOpen={contextData.setIsSideBarOpen} sidebarToggleBtn={sidebarToggleBtn} />;
    };

    return NewComponent;
}

export default withSideBarToggle;