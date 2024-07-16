import React, { useContext } from "react";
import DatasContext from "../../Context/DatasContext";

function withSideBarToggle(OriginalComponent) {
    const NewComponent = () => {
        const contextData = useContext(DatasContext)

        const sidebarToggleBtn = () => {
            contextData.setIsSideBarOpen((prevIsShow) => !prevIsShow);
            console.log(contextData.isSideBarOpen);
        };

        return <OriginalComponent isSideBarOpen={contextData.isSideBarOpen} sidebarToggleBtn={sidebarToggleBtn} />;
    };

    return NewComponent;
}

export default withSideBarToggle;