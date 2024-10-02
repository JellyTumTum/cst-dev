import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import React from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import ToggleableFolder from "./ToggleableFolder";
import FileName from "./FileName";

const Explorer = ({ onTabClick, tabPointer, setTabPointer, selectedTab, openTabs, pages, smallScreen }) => {

    const [openFolders, setOpenFolders] = useState(() => ({
        "cst-dev": true,
        "Projects": true,
        "Experience": true,
    }));

    const foldersRelations = {
        "cst-dev": {
            "Children": ["Projects", "Experience"],
            "Parent": null
        },
        "Projects": {
            "Children": [],
            "Parent": "cst-dev"
        },
        "Experience": {
            "Children": [],
            "Parent": "cst-dev"
        },
    };

    // DEPRECATED -->  Became useless after rendering was adjusted. but its hardcore stuff so if i ever need it better to keep it around.
    const toggleChildren = (name, newState, prevState) => {
        const updatedState = { ...prevState, [name]: newState };

        if (foldersRelations[name] && foldersRelations[name].Children) {
            foldersRelations[name].Children.forEach((child) => {
                Object.assign(updatedState, toggleChildren(child, newState, updatedState));
            });
        }

        return updatedState;
    };
    const toggleFolderRecursive = (name) => {
        setOpenFolders((prevState) => {
            const newState = !prevState[name];
            return toggleChildren(name, newState, prevState); 
        });
    };

    const toggleFolder = (name) => {
        setOpenFolders((prevState) => ({
            ...prevState,               // Keep the current state as is
            [name]: !prevState[name],   // Toggle the boolean value for the given folder name
        }));
    };


    const renderFolder = (folderName, files, indentLevel = 0, topLevel = false) => (
        <ToggleableFolder
            name={folderName}
            indentLevel={indentLevel}
            topLevel={topLevel}
            toggleFolder={toggleFolder}
            isOpen={openFolders[folderName]} // Pass isOpen and toggleFolder
        >
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
                {renderFolder("cst-dev", pages.filter(page => page.path.length === 1), 0, true)}
                {openFolders[foldersRelations["Projects"]["Parent"]] && renderFolder("Projects", pages.filter(page => page.path.includes("Projects")), 1)}
                {openFolders[foldersRelations["Experience"]["Parent"]] && renderFolder("Experience", pages.filter(page => page.path.includes("Experience")), 1)}
            </div>
        </div>
    );
};

export default Explorer;
