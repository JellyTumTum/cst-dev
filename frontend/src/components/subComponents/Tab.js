import React from "react";
import { Typography } from '@material-tailwind/react';
import { DocumentIcon } from "@heroicons/react/24/outline";

const Tab = ({ name, selected, position }) => {
    const isFirst = position === 'first';
    const isLast = position === 'last';

    return (
        <div
            className={`cursor-pointer h-full px-4 flex items-center justify-center 
                ${isFirst ? '' : 'border-l-[1px] border-l-borderColor' }
                ${isLast ? 'border-r-[1px] border-r-borderColor' : '' }
                ${selected ? 'border-t-[2px] border-t-selectedAccent bg-tabHover border-b-0' : 'border-b-[1px] border-b-borderColor'} 
                bg-tabBackground hover:bg-tabHover`}
        >
            <DocumentIcon className="h-5 w-5 mx-2 text-textMain" />
            <Typography className="text-md text-textMain mr-2">{name}</Typography>
        </div>
    );
};

export default Tab;
