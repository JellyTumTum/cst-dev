import { Typography } from "@material-tailwind/react";
import React from "react";
import FileName from "../subComponents/FileName";

const Welcome = ({ openTabs, selectedTab, onLinkClick}) => {


    return (
        <div className="h-auto w-full px-[22.25%] pb-[33.3%] pt-[14.11%]">
            <Typography variant='h1' className="text-textMain mb-1">cst.dev</Typography>
            <Typography variant='b1' className="text-textSecondary text-lg mb-[3.5rem]">Cameron Thomas, 21</Typography>
            <div className="flex flex-row">
                <div className="h-full w-[50%]">
                    <Typography className="text-textMain text-lg">Start</Typography>
                    <FileName name="Experience" isLink={true} openTabs={openTabs} selectedTab={selectedTab} onTabClick={onLinkClick}>
                    </FileName>
                    <FileName name="Lyriclabs.java" isLink={true} openTabs={openTabs} selectedTab={selectedTab} onTabClick={onLinkClick}>
                    </FileName>
                    <FileName name="Project SAM.py" isLink={true} openTabs={openTabs} selectedTab={selectedTab} onTabClick={onLinkClick}>
                    </FileName>

                </div>
                <div className="h-full w-[50%] bg-blue-500">
                    <Typography className="text-textMain text-lg">Introduction</Typography>
                </div>
            </div>

        </div>

    );

};

export default Welcome;
