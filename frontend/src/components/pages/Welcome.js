import { Typography } from "@material-tailwind/react";
import React from "react";
import FileName from "../subComponents/FileName";


const Welcome = ({ openTabs, selectedTab, onLinkClick, pages }) => {


    return (
        <div className="h-auto w-full px-[22.25%] pb-[33.3%] pt-[14.11%]">
            <Typography variant='h1' className="text-textMain mb-1">cst.dev</Typography>
            <Typography variant='paragraph' className="text-textSecondary text-lg mb-[3.5rem]">Cameron Thomas, 21</Typography>
            <div className="flex flex-row">
                <div className="h-full w-[50%]">
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
                <div className="h-full w-[50%]">
                    <Typography className="text-textMain text-lg">Introduction</Typography>
                </div>
            </div>

        </div>

    );

};

export default Welcome;
