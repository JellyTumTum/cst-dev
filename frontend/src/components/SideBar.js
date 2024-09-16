import React from "react";
import { useEffect, useState } from "react";
import IconBar from "./subComponents/IconBar";
import Explorer from "./subComponents/Explorer";

const SideBar = ({onTabClick, selectedTab, openTabs}) => {

    return (
        <div className="h-full w-full
        flex ">
            <div className="h-full w-[4.25rem]">
                <IconBar></IconBar>
            </div>
            <div className="w-[15.3rem] h-full">
                <Explorer onTabClick={onTabClick} selectedTab={selectedTab} openTabs={openTabs}></Explorer>
            </div>

        </div>
    );
};

export default SideBar;