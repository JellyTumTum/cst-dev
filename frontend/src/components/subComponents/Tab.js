import React from "react";
import { Typography } from '@material-tailwind/react';
import { DocumentIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Tab = ({ name, selected, position, onTabClose, selectedTab, openTabs }) => {
    const isFirst = position === 'first';
    const isLast = position === 'last';

    return (
        <div
            className={`group cursor-pointer h-full px-4 flex flex-row items-center justify-center 
                ${isFirst ? '' : 'border-l-[1px] border-l-borderColor'}
                ${isLast ? 'border-r-[1px] border-r-borderColor' : ''}
                ${selected ? 'border-t-[2px] border-t-selectedAccent bg-tabHover border-b-0' : 'border-b-[1px] border-b-borderColor'} 
                bg-tabBackground hover:bg-tabHover`}
        >
            <DocumentIcon className="h-5 w-5 mx-2 text-textMain" />
            <Typography className={`text-md 
                ${selected ? 'text-textMain' : 'text-textSecondary'} 
                mr-2`}>
                {name}
            </Typography>
            <div className={`h-6 w-6 rounded-md flex items-center justify-center hover:bg-tabCloseHover`}
                onClick={(event) => {
                    event.stopPropagation(); // Prevent click from bubbling up
                    onTabClose(name);
                }}

            >
                <XMarkIcon className={`h-5 w-5 transition-opacity duration-300 
        ${selected ? 'text-textMain opacity-100' : 'text-borderColor opacity-0 group-hover:opacity-100 group-hover:text-textSecondary'}
    `}></XMarkIcon>
            </div>

        </div>
    );
};

export default Tab;
