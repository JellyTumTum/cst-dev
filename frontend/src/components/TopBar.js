import React, { useState, useEffect } from "react";
import { Typography, Card } from '@material-tailwind/react';
import { CodeBracketIcon, ArrowLeftIcon, ArrowRightIcon, MinusIcon, Square2StackIcon, XMarkIcon, StrikethroughIcon } from "@heroicons/react/24/outline";
import TopBarButton from "./subComponents/TopBarButton";

const TopBar = ({ tabStack, openTabs }) => {

    const [isTouch, setIsTouch] = useState(false);
    const [hideButtons, setHideButtons] = useState(false); // Controls visibility of buttons
    const [hideMoreButtons, setHideMoreButtons] = useState(false);
    const [showJustNameBar, setShowJustNameBar] = useState(false);

    function isTouchDevice() {
        return window.matchMedia('(pointer: coarse)').matches;
    }

    useEffect(() => {
        setIsTouch(isTouchDevice());

        // Function to handle resizing and hide buttons if necessary
        const handleResize = () => {
            if (window.innerWidth < 1100) { // Adjust breakpoint as necessary
                setHideButtons(true);
            } else {
                setHideButtons(false);
            }

            if (window.innerWidth < 768) { // 768 is md breakpoint too. matches time for welcome page to switch.
                setHideMoreButtons(true);
            } else {
                setHideMoreButtons(false);
            }
            if (window.innerWidth < 300) {
                setShowJustNameBar(true);
            } else {
                setShowJustNameBar(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full h-full bg-topBarBackground">
            {!showJustNameBar ? (
                <div className="relative bg-topBarBackground w-full h-full border-b-[1px] border-borderColor flex justify-between items-center">
                    {/* Left Section with Buttons */}
                    <div className={`flex flex-row justify-start items-center ml-2 h-full ${hideButtons ? 'overflow-hidden' : ''}`}>
                        <CodeBracketIcon className="w-6 h-6 text-selectedAccent m-2 opacity-0 xs:opacity-100"></CodeBracketIcon>
                        {/* Hide buttons if screen is too small */}
                        {!hideButtons ? (
                            <>
                                <TopBarButton name={"File"} clickable={false} isTouch={isTouch} />
                                <TopBarButton name={"Edit"} clickable={false} isTouch={isTouch} />
                                <TopBarButton name={"Selection"} clickable={false} isTouch={isTouch} />
                                <TopBarButton name={"View"} clickable={true} isTouch={isTouch} />
                                <TopBarButton name={"Go"} clickable={false} isTouch={isTouch} />
                                <TopBarButton name={"Run"} clickable={false} isTouch={isTouch} />

                                <div className="hidden xxl:flex flex-row">
                                    
                                    <TopBarButton name={"Terminal"} clickable={false} isTouch={isTouch} />
                                    <TopBarButton name={"Help"} clickable={false} isTouch={isTouch} />
                                </div>
                            </>
                        ) : (
                            <div className="opacity-0 xs:opacity-100">
                                <TopBarButton name={"View"} clickable={true} isTouch={isTouch} />
                            </div>
                        )}
                    </div>

                    {/* Center Section with Card */}
                    <div className="flex mr-4 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 items-center">
                        <div className="hover:bg-topBarHover rounded-lg flex justify-center items-center">
                            <ArrowLeftIcon className="h-[1.1rem] w-[1.1rem] text-textSecondary m-1"></ArrowLeftIcon>
                        </div>
                        <div className="hover:bg-topBarHover rounded-lg flex justify-center items-center mr-2">
                            <ArrowRightIcon className="h-[1.1rem] w-[1.1rem] text-textSecondary m-1"></ArrowRightIcon>
                        </div>

                        <Card className=" opacity-0 xs:opacity-100 bg-topBarSearchBox border-[1px] border-borderColor  
                            min-w-[10rem] w-[10rem] md:w-[10rem] lg:w-[20rem] xl-w-[40rem]
                            flex justify-center items-center
                            rounded-md">
                            <Typography className="text-textSecondary text-md">
                                {hideButtons} cst.dev
                            </Typography>
                        </Card>
                    </div>

                    {/* Right Section with Icons */}
                    {!hideMoreButtons &&
                        <>
                            <div className="flex flex-row">
                                <div className="h-[2.5rem] w-[2.5rem]  flex justify-center items-center">
                                    <MinusIcon className="text-textSecondary w-4 h-4"></MinusIcon>
                                </div>
                                <div className="h-[2.5rem] w-[2.5rem] flex justify-center items-center">
                                    <Square2StackIcon className="text-textSecondary w-3 h-3 transform scale-x-[-1]"></Square2StackIcon>
                                </div>
                                <div className="h-[2.5rem] w-[2.5rem]  flex justify-center items-center">
                                    <XMarkIcon className="text-textSecondary w-4 h-4"></XMarkIcon>
                                </div>
                            </div>
                        </>
                    }
                </div>) : (
                <div className="flex flex-row justify-center items-center h-full">
                    <Card className="bg-topBarSearchBox border-[1px] border-borderColor  
                            w-[10rem] md:w-[10rem] lg:w-[20rem] xl-w-[40rem]
                            flex justify-center items-center
                            rounded-md">
                        <Typography className="text-textSecondary text-md">
                            {hideButtons} cst.dev
                        </Typography>
                    </Card>
                </div>
            )
            }
        </div>

    );
};

export default TopBar;
