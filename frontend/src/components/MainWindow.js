import React from "react";
import { useState } from "react";
import { Typography, Card } from '@material-tailwind/react';
import TabController from "./subComponents/TabController";
import Welcome from "./pages/Welcome";

const MainWindow = ({ onTabClick, selectedTab, openTabs, onTabClose }) => {

    // console.log(openTabs)
    // console.log(selectedTab)
    const [renderBreadcrumbs, setRenderBreadcrumbs] = useState(false);

    return (
        <div className="h-full w-full">
            <div className="h-[3rem] w-full">
                <TabController
                    openTabs={openTabs}
                    selectedTab={selectedTab}
                    onTabClick={onTabClick}
                    onTabClose={onTabClose}
                />
            </div>
            {
                renderBreadcrumbs &&
                    <div></div>
            }
            <Welcome openTabs={openTabs}
                    selectedTab={selectedTab}
                    onLinkClick={onTabClick}
                    ></Welcome>
        </div>

    );

};

export default MainWindow;
