
import { React, useState, useRef } from "react";
import { XCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, ChevronRightIcon, ChevronLeftIcon, BellIcon } from "@heroicons/react/24/outline";
import { Tooltip, Typography } from "@material-tailwind/react";

const BottomBar = ({ openTab }) => {

    const [showTunnelToolTip, setShowTunnelTooltip] = useState(false);
    const tunnelRef = useRef(false);
    const [fileType, setFileType] = useState("");

    const getTriangle = (position) => {
        let positionClasses = '';

        // Determine the position class based on the position argument
        switch (position) {
            case 'left':
                positionClasses = 'left-[10%] -translate-x-[10%]';
                break;
            case 'right':
                positionClasses = 'right-[10%] -translate-x-[90%]';
                break;
            case 'center':
            default:
                positionClasses = 'left-1/2 -translate-x-1/2';
                break;
        }

        return (
            <div className={`absolute w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-transparent border-t-[6px] border-t-dropdownBackground top-full ${positionClasses}`}></div>
        );
    };

    return (
        <div className="bg-bottomBarBackground w-full h-full border-t-[1px] border-borderColor hidden xs:flex flex-row justify-start items-center">
            <div className="flex flex-row bg-tunnelColor h-full w-12 items-center justify-center cursor-not-allowed mr-2">
                <Tooltip className="border-[1px] border-borderColor bg-dropdownBackground" content={
                    <>
                        <Typography className="text-textMain text-sm">Cannot open remote window</Typography>
                        {getTriangle('left')}
                    </>}>
                    <div
                        className="flex flex-row items-center justify-center mt-1 select-none"
                        data-tooltip-target="tooltip"
                        ref={tunnelRef}
                        onMouseEnter={() => setShowTunnelTooltip(true)}
                        onMouseLeave={() => setShowTunnelTooltip(false)}>
                        <ChevronRightIcon className="w-5 h-5 text-tunnelIconColor translate-x-[5px] "></ChevronRightIcon>
                        <ChevronLeftIcon className="w-5 h-5 text-tunnelIconColor -translate-x-2 -translate-y-[5px]"></ChevronLeftIcon>
                    </div>
                </Tooltip>
            </div>
            <div className="flex flex-row justify-between items-center h-full flex-grow px-0 sm:px-2">
                <Tooltip className="border-[1px] border-borderColor bg-dropdownBackground" content={
                    <>
                        <Typography className="text-textMain text-sm">No Problems</Typography>
                        {getTriangle('center')}
                    </>}>
                    <div className="flex flex-row h-full">
                        <div className="flex flex-row hover:bg-topBarHover gap-1 justify-center items-center px-2">
                            <XCircleIcon className="text-textMain h-5 w-5"></XCircleIcon>
                            <Typography className="text-md text-textMain mt-[2px]">0</Typography>

                            <div className="flex flex-row hover:bg-topBarHover gap-1 justify-center items-center">
                                <ExclamationTriangleIcon className="text-textMain h-5 w-5"></ExclamationTriangleIcon>
                                <Typography className="text-md text-textMain mt-[2px]">0</Typography>
                            </div>
                        </div>
                    </div>
                </Tooltip>

                <div className="flex flex-row gap-1 sm:gap-2 h-full items-center">

                    {openTab &&
                        <>
                            <Tooltip className="border-[1px] border-borderColor bg-dropdownBackground" content={
                                <>
                                    <Typography className="text-textMain text-sm">Indendation Selection Unavailable</Typography>
                                    {getTriangle('center')}
                                </>}>
                                <div className="hover:bg-topBarHover h-full items-center px-1 cursor-pointer hidden sm:flex">
                                    <Typography className="text-textMain text-sm">Spaces: 4</Typography>
                                </div>
                            </Tooltip>
                            <Tooltip className="border-[1px] border-borderColor bg-dropdownBackground" content={
                                <>
                                    <Typography className="text-textMain text-sm">Encoding Selection Unavailable</Typography>
                                    {getTriangle('center')}
                                </>}>
                                <div className="hover:bg-topBarHover h-full items-center px-1 hidden xs:flex text-xs cursor-pointer">
                                    <Typography className="text-textMain text-sm">UTF-8</Typography>
                                </div>
                            </Tooltip>
                            <Tooltip className="border-[1px] border-borderColor bg-dropdownBackground" content={
                                <>
                                    <Typography className="text-textMain text-sm">Language Selection Unavailable</Typography>
                                    {getTriangle('center')}
                                </>}>
                                <div className="hover:bg-topBarHover h-full flex items-center px-1 cursor-pointer">
                                    <Typography className="text-textMain text-sm">Webpage</Typography>
                                </div>
                            </Tooltip>
                        </>
                    }

                    <Tooltip className="border-[1px] border-borderColor bg-dropdownBackground" content={
                        <>
                            <Typography className="text-textMain text-sm">No Notifications</Typography>
                            {getTriangle('right')}
                        </>}>
                        <div className="hover:bg-topBarHover h-full flex items-center px-1">
                            <BellIcon className="w-5 h-5 text-textMain"></BellIcon>
                        </div>
                    </Tooltip>



                </div>
            </div>
        </div>
    );

};

export default BottomBar;
