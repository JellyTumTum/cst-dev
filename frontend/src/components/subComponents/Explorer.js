import { Typography } from "@material-tailwind/react";
import React from "react";
// import { useEffect, useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import ToggleableFolder from "./ToggleableFolder";
import FileName from "./FileName";


const Explorer = ({onTabClick, selectedTab, openTabs}) => {

    return (
        <div className="pt-4 h-full w-full bg-explorerMain 
        border-r-[1px] border-borderColor">
            <div className="h-[2rem] w-full pl-2 
            flex flex-row justify-between pr-4 ">
                <Typography
                    className="px-5 pt-1 text-sm text-textMain">
                    EXPLORER
                </Typography>
                <EllipsisHorizontalIcon
                    className=" w-[1.75rem] h-[1.75rem] text-textSecondary ">
                </EllipsisHorizontalIcon>
            </div>
            <div className="">
                <ToggleableFolder name="cst-dev" indentLevel={0} topLevel={true}>
                    <FileName name="Welcome.js" indentLevel={1} onTabClick={onTabClick} selectedTab={selectedTab} openTabs={openTabs}></FileName>
                    <ToggleableFolder name="Projects" indentLevel={1}>
                        <FileName name="Lyriclabs.java" indentLevel={2} onTabClick={onTabClick} selectedTab={selectedTab} openTabs={openTabs}></FileName>
                        <FileName name="Project SAM.py" indentLevel={2} onTabClick={onTabClick} selectedTab={selectedTab} openTabs={openTabs}></FileName>
                    </ToggleableFolder>
                    <ToggleableFolder name="Experience" indentLevel={1}>

                    </ToggleableFolder>
                </ToggleableFolder>
            </div>

        </div>
    );
};

export default Explorer;