import React from "react";
import { useState, useEffect } from "react";
import { Typography, Card } from '@material-tailwind/react';
import TabController from "./subComponents/TabController";
import Welcome from "./pages/Welcome";
import Programming from "./pages/Programming";
import Lyriclabs from "./pages/Lyriclabs";
import ProjectSAM from "./pages/ProjectSAM";
import Website from "./pages/Website";
import { FaceFrownIcon, CodeBracketIcon, CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import FileName from "./subComponents/FileName";

const MainWindow = ({ onTabClick, tabPointer, setTabPointer, goBack, selectedTab, openTabs, onTabClose, pages, isExplorerOpen }) => {
    const pageComponents = {
        'Welcome.txt': Welcome,
        'Lyric Labs.java': Lyriclabs,
        'Project SAM.py': ProjectSAM,
        'Programming.html': Programming,
        'This Website.js': Website,
    };
    const PageComponent = pageComponents[selectedTab?.name];

    const [renderBreadcrumbs, setRenderBreadcrumbs] = useState(false);

    const [hasScrollbar, setHasScrollbar] = useState(false);

    // useEffect(() => {
    //     const container = document.getElementById('tabControllerDiv');
    //     const checkScrollbar = () => {
    //         setHasScrollbar(container.scrollWidth > container.clientWidth); // container.clientWidth
    //     };

    //     checkScrollbar(); // Check initially
    //     window.addEventListener('resize', checkScrollbar); // Recheck on resize

    //     return () => window.removeEventListener('resize', checkScrollbar);
    // }, []);

    return (
        <div className="relative h-full w-full flex flex-col">
            {openTabs.length !== 0 && 
                <div id='tabControllerDiv' className={` ${hasScrollbar ? 'h-[4rem] min-h-[4rem]' : 'h-[3rem] min-h-[3rem]'} w-full scrollbar-horizontal-only`}>
                    <TabController
                        openTabs={openTabs}
                        selectedTab={selectedTab}
                        onTabClick={onTabClick}
                        tabPointer={tabPointer}
                        setTabPointer={setTabPointer}
                        onTabClose={onTabClose}
                        goBack={goBack}
                        pages={pages}
                    />
                </div>
            }

            {renderBreadcrumbs && (
                <div className="w-full">
                    {/* Breadcrumbs content goes here */}
                </div>
            )}

            <div className="flex-grow overflow-y-auto">
                {/* Render PageComponent if found */}
                {PageComponent ? (
                    <PageComponent
                        openTabs={openTabs}
                        selectedTab={selectedTab}
                        onLinkClick={onTabClick}
                        tabPointer={tabPointer}
                        setTabPointer={setTabPointer}
                        pages={pages}
                        isExplorerOpen={isExplorerOpen}
                    />
                ) : (
                    <div className={`pt-2 px-2 justify-center items-center flex flex-col ${isExplorerOpen ? 'md:px-[22.25%] md:pt-[14.11%]' : 'sm:px-[22.25%] sm:pt-[14.11%]'} `}>
                        <FaceFrownIcon className={`text-explorerMain w-96 ${isExplorerOpen ? 'w-32 md:w-96':'w-16 md:w-96'}`}></FaceFrownIcon>
                        <Typography variant='paragraph' className='text-textSecondary text-xl text-center'>You have closed all open tabs</Typography>
                        <div className={`h-full w-full  flex items-center flex-col`}>
                            <Typography className="text-textSecondary text-lg mt-2">Try one of these:</Typography>
                            {pages.map((page, index) => (
                                <FileName
                                    key={index}
                                    name={page.name}
                                    indentLevel={0}
                                    onTabClick={onTabClick}
                                    tabPointer={tabPointer}
                                    setTabPointer={setTabPointer}
                                    selectedTab={selectedTab}
                                    openTabs={openTabs}
                                    isLink={true}
                                />
                            ))}

                        </div>
                    </div>
                )}
            </div>
        </div>
    );

};

export default MainWindow;
