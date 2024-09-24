import React from 'react';
import { Typography } from '@material-tailwind/react';

const DemoCard = ({ screenshotUrl, demoUrl, projectTitle, preText = "Try out " }) => {


    const whenClicked = () => {
        if (demoUrl) {
            window.open(demoUrl);
        }
    };


    return (
        <div onClick={whenClicked} className={`group relative w-11/12 h-full overflow-hidden rounded-xl border-2 border-borderColor ${demoUrl ? 'hover:border-selectedAccent cursor-pointer' : ''} shadow-lg group`}>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover transition-transform duration-300 ease-in-out w-"
                style={{ backgroundImage: `url(${screenshotUrl})`}}
            >
                {/* Blur effect */}
                <div className="absolute inset-0 backdrop-blur-sm bg-black/50"></div>
            </div>

            {/* Card content overlay */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-textPrimary">
                <Typography className="text-textMain text-lg font-bold">{preText}  {projectTitle}</Typography>
            </div>
        </div>
    );
};

export default DemoCard;
