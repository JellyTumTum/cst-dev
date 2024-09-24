import React from "react";
import IconBar from "./subComponents/IconBar";
import Explorer from "./subComponents/Explorer";

const SideBar = ({ onTabClick, selectedTab, openTabs, pages, isExplorerOpen, setExplorerOpen }) => {

    const toggleExplorer = () => {
        setExplorerOpen((prev) => !prev); // Toggles the Explorer open/close state
    };

    return (
        <div className="h-full w-full flex">
            <div className="h-full w-[4.25rem]">
                <IconBar toggleExplorer={toggleExplorer} isExplorerOpen={isExplorerOpen} />
            </div>
            {isExplorerOpen && (
                <div className="w-[15.3rem] h-full">
                    <Explorer onTabClick={onTabClick} selectedTab={selectedTab} openTabs={openTabs} pages={pages} />
                </div>
            )}
        </div>
    );
};

export default SideBar;
