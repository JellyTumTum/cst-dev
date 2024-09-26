import React, { useState, useEffect } from "react";
import { Typography, Card, Tooltip } from '@material-tailwind/react';
import { CodeBracketIcon, ArrowLeftIcon, ArrowRightIcon, MinusIcon, Square2StackIcon, StopIcon, XMarkIcon, StrikethroughIcon } from "@heroicons/react/24/outline";
import TopBarButton from "./subComponents/TopBarButton";
import Dropdown from "./subComponents/Dropdown";

const TopBar = ({ openTabs, setOpenTabs, tabPointer, setTabPointer, tabHistory, setTabHistory, goBack, goForward, selectedTab, setSelectedTab, changeTheme }) => {

    const [isTouch, setIsTouch] = useState(false);
    const [hideButtons, setHideButtons] = useState(false); // Controls visibility of buttons
    const [hideMoreButtons, setHideMoreButtons] = useState(false);
    const [showJustNameBar, setShowJustNameBar] = useState(false);
    const [showViewDropdown, setShowViewDropdown] = useState(false);
    const [showThemeDropdown, setShowThemeDropdown] = useState(false);

    const [isFullscreen, setIsFullscreen] = useState(false);

    const themeDropdownInformation = [
        {
            label: "Light (Modern)",
            onClick: () => changeTheme("theme-light-modern") // Clickable item
        },
        {
            label: "Dark (Modern)",
            onClick: () => changeTheme("theme-dark-modern") // Another clickable item
        },
        {
            label: "Dark (Dark+)",
            onClick: () => changeTheme("theme-dark") // Another clickable item
        },
        {
            label: "Solarized Dark",
            onClick: () => changeTheme("theme-solarized-dark") // Another clickable item
        }
    ];
    const viewDropdownInformation = [
        {
            label: "Change Theme",
            children: (
                <Dropdown information={themeDropdownInformation} position="right" fade={true} setShowVariable={null} showVariable={true}></Dropdown>
            ),
        },
    ];

    const toggleFullscreen = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.log(`Error: ${err.message}`);
            });
        } else {
            document.exitFullscreen().catch((err) => {
                console.log(`Error: ${err.message}`);
            });
        }
        setIsFullscreen(!isFullscreen);
    };

    const checkFullscreenStatus = () => {
        if (document.fullscreenElement) {
            setIsFullscreen(true);
        } else {
            setIsFullscreen(false);
        }
    };

    useEffect(() => {
        checkFullscreenStatus();

        // Optional: Listen for fullscreen changes in case the user toggles fullscreen manually
        const fullscreenChangeHandler = () => {
            checkFullscreenStatus();
        };

        document.addEventListener('fullscreenchange', fullscreenChangeHandler);

        return () => {
            document.removeEventListener('fullscreenchange', fullscreenChangeHandler);
        };
    }, []);



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
            if (window.innerWidth < 390) {
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
                    <div className={`flex flex-row justify-start items-center ml-2 h-full ${hideButtons ? '' : ''}`}>
                        <CodeBracketIcon className="w-6 h-6 text-selectedAccent m-2 opacity-0 xs:opacity-100"></CodeBracketIcon>
                        {/* Hide buttons if screen is too small */}
                        {!hideButtons ? (
                            <>
                                <TopBarButton name={"File"} clickable={false} isTouch={isTouch} />
                                <TopBarButton name={"Edit"} clickable={false} isTouch={isTouch} />
                                <TopBarButton name={"Selection"} clickable={false} isTouch={isTouch} />
                                <TopBarButton name={"View"} clickable={true} onClick={() => setShowViewDropdown(prev => !prev)} showVariable={showViewDropdown}>
                                    <Dropdown information={viewDropdownInformation}
                                        setShowVariable={setShowViewDropdown}
                                        showVariable={showViewDropdown}>
                                    </Dropdown>
                                </TopBarButton>
                                <TopBarButton name={"Go"} clickable={false} isTouch={isTouch} />
                                <TopBarButton name={"Run"} clickable={false} isTouch={isTouch} />

                                <div className="hidden xxl:flex flex-row">

                                    <TopBarButton name={"Terminal"} clickable={false} isTouch={isTouch} />
                                    <TopBarButton name={"Help"} clickable={false} isTouch={isTouch} />
                                </div>
                            </>
                        ) : (
                            <TopBarButton name={"View"} clickable={true} onClick={() => setShowViewDropdown(prev => !prev)} showVariable={showViewDropdown}>
                                <Dropdown information={viewDropdownInformation}
                                    setShowVariable={setShowViewDropdown}
                                    showVariable={showViewDropdown}>
                                </Dropdown>
                            </TopBarButton>
                        )}
                    </div>

                    {/* Center Section with Card */}
                    <div className="flex mr-4 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 items-center">
                        <div onClick={goBack} className={`${tabHistory.length > tabPointer && tabPointer > 0 ? 'hover:bg-topBarHover' : ''} rounded-lg flex justify-center items-center`}>
                            <ArrowLeftIcon className={`h-[1.1rem] w-[1.1rem] m-1 
                                ${tabHistory.length > tabPointer && tabPointer > 0 ? 'text-textMain' : 'text-textSecondary'}`}>

                            </ArrowLeftIcon>
                        </div>
                        <div onClick={goForward} className={`${tabHistory.length > tabPointer + 1 ? 'hover:bg-topBarHover' : ''} rounded-lg flex justify-center items-center mr-2`}>
                            <ArrowRightIcon className={`h-[1.1rem] w-[1.1rem] m-1
                                ${tabHistory.length > tabPointer + 1 ? 'text-textMain' : 'text-textSecondary'}`}>

                            </ArrowRightIcon>
                        </div>

                        <Card className=" opacity-0 xs:opacity-100 bg-topBarSearchBox border-[1px] border-borderColor  
                            w-[10rem] md:w-[10rem] lg:w-[20rem] xl-w-[40rem]
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
                                <div onClick={() => window.open('https://www.ecosia.org/')} className="h-[2.5rem] w-[2.5rem] flex justify-center items-center hover:bg-topBarHover">
                                    <MinusIcon className="text-textMain w-4 h-4"></MinusIcon>
                                </div>
                                <div onClick={toggleFullscreen} className="h-[2.5rem] w-[2.5rem] flex justify-center items-center hover:bg-topBarHover">
                                    {isFullscreen ?
                                        <>
                                            <Square2StackIcon className="text-textMain w-3 h-3 transform scale-x-[-1]"></Square2StackIcon>
                                        </>
                                        :
                                        <>
                                            <StopIcon className="text-textMain w-3 h-3 transform scale-x-[-1]"></StopIcon>
                                        </>
                                    }

                                </div>
                                <Tooltip className="border-[1px] border-borderColor bg-dropdownBackground -mt-4" content={
                                    <>
                                        <Typography className="text-textMain text-sm text-red-400">Cannot close tab due to browser restrictions</Typography>
                                    </>}>
                                    <div className="h-[2.5rem] w-[2.5rem] flex justify-center items-center group cursor-not-allowed">
                                        <XMarkIcon className="text-textSecondary w-4 h-4 group-hover:text-red-500"></XMarkIcon>
                                    </div>
                                </Tooltip>
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
