import React from "react";
import { useState } from "react";
import { Typography, Card } from '@material-tailwind/react';
import TabController from "./subComponents/TabController";

const MainWindow = ({onTabClick, selectedTab, openTabs}) => {

    return (
        <div className="h-[3rem] w-full">
            <TabController
                tabNames={openTabs}
                selectedTab={selectedTab}
                onTabClick={onTabClick}
            />
        </div>
    );

};

export default MainWindow;
