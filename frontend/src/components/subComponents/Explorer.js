import { Typography } from "@material-tailwind/react";
import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import ToggleableFolder from "./ToggleableFolder";
import FileName from "./FileName";

const Explorer = ({ onTabClick, selectedTab, openTabs, pages }) => {
    const renderFolder = (folderName, files, indentLevel = 0) => (
        <ToggleableFolder name={folderName} indentLevel={indentLevel}>
            {files.map((file, index) => (
                <FileName
                    key={index}
                    name={file.name}
                    indentLevel={indentLevel + 1}
                    onTabClick={onTabClick}
                    selectedTab={selectedTab}
                    openTabs={openTabs}
                />
            ))}
        </ToggleableFolder>
    );

    return (
        <div className="pt-4 h-full w-full bg-explorerMain border-r-[1px] border-borderColor">
            <div className="h-[2rem] w-full pl-2 flex flex-row justify-between pr-4">
                <Typography className="px-5 pt-1 text-sm text-textMain">EXPLORER</Typography>
                <EllipsisHorizontalIcon className="w-[1.75rem] h-[1.75rem] text-textSecondary" />
            </div>
            <div>
                {/* Dynamically render folders and files */}
                {renderFolder("cst-dev", pages.filter(page => page.path.length === 1))}
                {renderFolder("Projects", pages.filter(page => page.path.includes("Projects")), 1)}
                {renderFolder("Experience", pages.filter(page => page.path.includes("Experience")), 1)}
            </div>
        </div>
    );
};

export default Explorer;
