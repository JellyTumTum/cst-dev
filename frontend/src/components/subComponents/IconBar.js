import React from "react";
import { useEffect, useState } from "react";
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'

const IconBar = () => {

    // TODO: Complete:
    // - adding grid support for inside explorer on smaller screens 
    // - add github logo + others when thought of

    const icons = [
        { id: 1, icon: DocumentDuplicateIcon, name: "ExplorerIcon" },
    ]


    return (
        <div className="h-full w-full bg-sideBarMain
        border-r-[1px] border-borderColor">
            <div className='flex flex-row'>
                <div className='h-[4.25rem] w-[1px] bg-selectedAccent'></div>
                <DocumentDuplicateIcon className="w-[4.25rem] h-auto text-textMain p-3"></DocumentDuplicateIcon>
            </div>
        </div>
    );
};

export default IconBar;