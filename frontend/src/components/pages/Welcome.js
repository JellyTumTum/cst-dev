import { Typography } from "@material-tailwind/react";
import React from "react";
import FileName from "../subComponents/FileName";


const Welcome = ({ openTabs, selectedTab, onLinkClick, pages, isExplorerOpen }) => {


    return (
        <div className={`h-auto w-full pt-2 px-2 ${isExplorerOpen ? 'md:px-[22.25%] md:pt-[14.11%]' : 'sm:px-[22.25%] sm:pt-[14.11%]'} `}>
            <Typography variant='h1' className={`text-textMain mb-1 text-center pt-2 ${isExplorerOpen ? 'md:text-left  md:pt-0' : 'sm:text-left  sm:pt-0'} `}>cst.dev</Typography>
            <Typography variant='paragraph' className={`text-textSecondary text-lg mb-[3.5rem] text-center ${isExplorerOpen ? 'md:text-left' : 'sm:text-left'} `}>Cameron Thomas, 21</Typography>
            <div className={`flex flex-col gap-4 ${isExplorerOpen ? 'md:flex-row' : 'sm:flex-row' } `}>
                <div className={`h-full w-full  flex items-center flex-col ${isExplorerOpen ? 'md:w-1/2 md:items-start' : 'sm:w-1/2 sm:items-start'} `}>
                    <Typography className="text-textMain text-lg">Start</Typography>
                    {pages.map((page, index) => (
                        <FileName
                            key={index}
                            name={page.name}
                            indentLevel={0}
                            onTabClick={onLinkClick}
                            selectedTab={selectedTab}
                            openTabs={openTabs}
                            isLink={true}
                        />
                    ))}

                </div>
                <div className={`h-full w-full mt-5 ${isExplorerOpen ? 'md:w-1/2 md:mt-0' : 'sm :w-1/2 sm:mt-0'} `}>
                    <Typography className={`text-textMain text-lg text-center ${isExplorerOpen ? 'md:text-left' : 'sm:text-left'} `}>Introduction</Typography>
                    <Typography variant="paragraph" className={`text-textSecondary text-sm text-center ${isExplorerOpen ? 'md:text-left' : 'sm:text-left'} `}>Hi, I'm Cameron! I recently graduated with a BSc in Computer Science from the University of Birmingham and have a strong passion for software development. I'm currently looking for opportunities as a software developer where I can apply my skills and continue growing in the field. Feel free to explore my projects and get in touch!</Typography>
                </div>
            </div>

        </div>

    );

};

export default Welcome;
