import React, { useState, useRef } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Card, Typography } from "@material-tailwind/react";

const DropdownButton = ({ label, onClick, children, keybind = null }) => {
    const [isHovered, setIsHovered] = useState(false);
    const timeoutId = useRef(null);

    const handleMouseEnter = () => {
        if (children) {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current); // Cancel the closing timeout
            }
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (children) {
            timeoutId.current = setTimeout(() => {
                setIsHovered(false); // Delay the closing
            }, 200); // Adjust the delay time as needed
        }
    };

    return (
        <Card
            className="relative bg-dropdownBackground items-center hover:bg-selectedAccent w-auto min-w-48 h-8 rounded-lg shadow-none px-4 flex flex-grow flex-row justify-between gap-4"
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Typography className="text-textMain cursor-pointer whitespace-nowrap">{label}</Typography>
            <div className="flex flex-row items-center -mr-2">
                {keybind && <Typography className="text-textMain">{keybind}</Typography>}
                {children && <ChevronRightIcon className="w-4 h-4 text-textPrimary" />}
            </div>

            {/* Display children on hover */}
            {isHovered && children && (
                <div
                    className="absolute left-full top-0 z-50"
                    onMouseEnter={handleMouseEnter} // Prevent closing when hovering over the children
                    onMouseLeave={handleMouseLeave} // Close when the mouse leaves the children area
                >
                    {children}
                </div>
            )}
        </Card>
    );
};

export default DropdownButton;
