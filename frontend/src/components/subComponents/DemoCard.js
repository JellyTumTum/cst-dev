import React from 'react';
import { Typography } from '@material-tailwind/react';

const DemoCard = ({ screenshotUrl, demoUrl, projectTitle }) => {

    const whenClicked = () => {
        window.open(demoUrl);
    };
    

    return (
            <div onClick={whenClicked} className=" cursor-pointer group relative w-11/12 h-full overflow-hidden rounded-xl border-2 border-borderColor hover:border-selectedAccent shadow-lg group bg-blue-500">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 bg-cover transition-transform duration-300 ease-in-out w-"
                    style={{ backgroundImage: `url(${screenshotUrl})` }}
                >
                    {/* Blur effect */}
                    <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>
                </div>

                {/* Card content overlay */}
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-textPrimary">
                    <Typography className="text-textMain text-lg font-bold">Try out {projectTitle}</Typography>
                </div>
            </div>
    );
};

export default DemoCard;
