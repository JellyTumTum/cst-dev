import React from "react";
import { useEffect, useState } from "react";
import { DocumentDuplicateIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { Tooltip, Typography } from "@material-tailwind/react";

const IconBar = ({ toggleExplorer, isExplorerOpen }) => {

    const [showExplorerTooltip, setShowExplorerTooltip] = useState(true);

    const onExplorerClick = () => {
        toggleExplorer();
        // Hide the tooltip
        setShowExplorerTooltip(false);

        // Set it back to true after 200ms
        setTimeout(() => {
            setShowExplorerTooltip(true);
        }, 200);
    };

    const onCVClick = () => {
        window.open('/cameron-thomas-cv.pdf', '_blank');
    };

    return (
        <div className="h-full w-full bg-sideBarMain
        border-r-[1px] border-borderColor flex-col flex justify-between">
            <Tooltip className={`border-[1px] border-borderColor bg-dropdownBackground ${showExplorerTooltip ? 'opacity-100' : 'opacity-0'}`} placement="right" content={
                <>
                    <Typography className="text-textMain text-sm">Toggle Explorer Window</Typography>
                </>}>
                <div onClick={onExplorerClick} className='flex flex-row cursor-pointer group'>
                    <div className={`h-[4.25rem] w-[2px] ${isExplorerOpen ? 'bg-selectedAccent' : 'bg-iconBarBackground'}`}></div>
                    <DocumentDuplicateIcon className={`w-[4.25rem] h-[4.25rem] group-hover:text-textMain ${isExplorerOpen ? 'text-textMain' : 'text-textSecondary'} p-3`}></DocumentDuplicateIcon>
                </div>
            </Tooltip>
            <div className="flex flex-col">
                <Tooltip className="border-[1px] border-borderColor bg-dropdownBackground" placement="right" content={
                    <>
                        <Typography className="text-textMain text-sm">View my CV (new tab)</Typography>
                    </>}>
                    <div onClick={onCVClick} className='flex flex-row cursor-pointer group'>
                        <DocumentTextIcon className={`w-[4.25rem] h-[4.25rem] group-hover:text-textMain text-textSecondary p-3`}></DocumentTextIcon>
                    </div>
                </Tooltip>
                <Tooltip className="border-[1px] border-borderColor bg-dropdownBackground" placement="right" content={
                    <>
                        <Typography className="text-textMain text-sm">Open my Github (new tab)</Typography>
                    </>}>
                    <div className="w-auto h-auto m-[0.8rem] flex justify-center items-center cursor-pointer group">
                        <a href="https://www.github.com/jellytumtum" target="_blank" rel="noopener noreferrer">
                            <svg className="w-10 h-auto fill-current text-textSecondary group-hover:text-textMain" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </Tooltip>
                <Tooltip className="border-[1px] border-borderColor bg-dropdownBackground" placement="right" content={
                    <>
                        <Typography className="text-textMain text-sm">Open my LinkedIn (new tab)</Typography>
                    </>}>
                    <div className="w-auto h-auto m-[0.8rem] flex justify-center items-center group cursor-pointer">
                        <a href="https://www.linkedin.com/in/cameron-thomas-595417251/" target="_blank" rel="noopener noreferrer">
                            <svg className="w-10 h-auto fill-current fill-iconBarBackground text-textSecondary group-hover:text-textMain" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64">
                                <path d="M29.63.001H2.362C1.06.001 0 1.034 0 2.306V29.69C0 30.965 1.06 32 2.362 32h27.27C30.937 32 32 30.965 32 29.69V2.306C32 1.034 30.937.001 29.63.001z" fill="currentColor" />
                                <path d="M4.745 11.997H9.5v15.27H4.745zm2.374-7.6c1.517 0 2.75 1.233 2.75 2.75S8.636 9.9 7.12 9.9a2.76 2.76 0 0 1-2.754-2.753 2.75 2.75 0 0 1 2.753-2.75m5.35 7.6h4.552v2.087h.063c.634-1.2 2.182-2.466 4.5-2.466 4.806 0 5.693 3.163 5.693 7.274v8.376h-4.743V19.84c0-1.77-.032-4.05-2.466-4.05-2.47 0-2.85 1.93-2.85 3.92v7.554h-4.742v-15.27z" />
                            </svg>
                        </a>
                    </div>
                </Tooltip>
            </div>


        </div >
    );
};

export default IconBar;