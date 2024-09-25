import { React, useState } from "react";
import { Typography, Card, Button } from '@material-tailwind/react';

const TopBarButton = ({ name, clickable, children, isTouch = false }) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        if (clickable) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    return (
        <div className="relative flex-col justify-center items-center">
            <div onClick={toggleDropdown} className={`bg-topBarBackground rounded-[4px] border-0 flex justify-center items-center my-[3px] 
            ${clickable ? 'hover:bg-topBarHover cursor-default' : 'cursor-default'}`}>
                <Typography className={` text-md mx-[6px] ${clickable ? 'text-textMain' : 'text-textSecondary'}`}>{name}</Typography>
            </div>
            {/* Display the dropdown if open */}
            {isDropdownOpen && (
                <div className="absolute top-full z-50">
                    {children}
                </div>
            )}
        </div>

    );

};

export default TopBarButton;
