import React from "react";
import IconBar from "./subComponents/IconBar";
import Explorer from "./subComponents/Explorer";

const SideBar = ({ onTabClick, tabPointer, setTabPointer, selectedTab, openTabs, pages, isExplorerOpen, setExplorerOpen, smallScreen }) => {

    const toggleExplorer = () => {
        setExplorerOpen((prev) => !prev); // Toggles the Explorer open/close state
    };

    return (
        <div className="h-full w-full flex">
            <div className="h-full w-[4.25rem]">
                <IconBar toggleExplorer={toggleExplorer} isExplorerOpen={isExplorerOpen} />
            </div>
            {isExplorerOpen && (
                <div className={`${smallScreen ? 'w-full':'w-[15.3rem]'} h-full`}>
                    <Explorer onTabClick={onTabClick} tabPointer={tabPointer} setTabPointer={tabPointer} selectedTab={selectedTab} openTabs={openTabs} pages={pages} smallScreen={smallScreen}/>
                </div>
            )}
        </div>
    );
};

export default SideBar;
