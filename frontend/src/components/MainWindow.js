import React from "react";
import { useState } from "react";
import { Typography, Card } from '@material-tailwind/react';
import TabController from "./subComponents/TabController";

const MainWindow = ({onTabClick, selectedTab, openTabs, onTabClose}) => {

    // console.log(openTabs)
    // console.log(selectedTab)

    return (
        <div className="h-[3rem] w-full">
            <TabController
                openTabs={openTabs}
                selectedTab={selectedTab}
                onTabClick={onTabClick}
                onTabClose={onTabClose}
            />
        </div>
    );

};

export default MainWindow;
