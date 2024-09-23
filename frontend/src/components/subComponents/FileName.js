import React, { useEffect } from "react";
import { DocumentIcon } from '@heroicons/react/24/outline'; // Default icon for files
import { Typography, useAccordion } from "@material-tailwind/react";
import FileIcon from "./FileIcon";
import { stripFileExtension } from "../../utils/iconUtils";

const FileName = ({ name, isLink=false, indentLevel = 0, onTabClick, selectedTab, openTabs }) => {
    // console.log(name)
    // TODO: Implement different file icons. 
    let backgroundAdjustments = false
    if (selectedTab) {
        backgroundAdjustments = selectedTab.name === name && !isLink
    }

    const handleClick = () => {
        onTabClick(name);
    };

    return (
        <div className={` flex items-center ${isLink ? '' : 'hover:bg-explorerHover cursor-pointer'} ${backgroundAdjustments ? 'bg-explorerSelected' : ''}`} onClick={handleClick} style={{ paddingLeft: `${indentLevel}rem` }}>
            {!isLink && <div className='h-[1.6rem] w-[1px] mr-1 bg-borderColor'></div>}
            <FileIcon fileName={name} linkColor={isLink} className="w-6 h-6 text-textMain cursor-pointer" />
            <Typography className={`${isLink ? 'text-linkColor cursor-pointer' : 'text-textMain'} `}>{stripFileExtension(name)}</Typography>
        </div>
    );
};

export default FileName;
