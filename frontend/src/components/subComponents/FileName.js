import React, { useEffect } from "react";
import { DocumentIcon } from '@heroicons/react/24/outline'; // Default icon for files
import { Typography, useAccordion } from "@material-tailwind/react";
import FileIcon from "./FileIcon";
import { stripFileExtension } from "../../utils/iconUtils";

const FileName = ({ name, fileType = "default", indentLevel = 0, onTabClick, selectedTab, openTabs }) => {
    // TODO: Implement different file icons. 

    const handleClick = () => {
        onTabClick(name);
    };

    return (
        <div className={`cursor-pointer flex items-center hover:bg-explorerHover ${selectedTab === name ? 'bg-explorerSelected' : ''}`} onClick={handleClick} style={{ paddingLeft: `${indentLevel}rem` }}>
            <div className='h-[1.6rem] w-[1px] mr-1 bg-borderColor'></div>
            <FileIcon fileName={name} className="w-6 h-6 text-textMain" />
            <Typography className={`text-textMain`}>{stripFileExtension(name)}</Typography>
        </div>
    );
};

export default FileName;
