import React, { useState, useRef, useEffect } from "react";
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Card, Typography } from "@material-tailwind/react";
import Dropdown from "./Dropdown";

const DropdownButton = ({ label, children, onClick, onHover, keybind = null }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false); // Track hover state
    const dropdownRef = useRef(null);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Handlers for mouse hover
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Card
            className="relative inline-block bg-dropdownBackground items-center hover:bg-selectedAccent w-auto h-8 rounded-lg shadow-none px-4 flex flex-grow flex-row justify-between gap-4"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} // Apply hover detection
        >
            <Typography className="text-textMain">{label}</Typography>
            <div className="w-32"></div>
            <div className="flex flex-row items-center -mr-2">
                {keybind &&
                    <Typography className="text-textMain">{keybind}</Typography>}
                {!onHover && (
                    <ChevronRightIcon className="w-4 h-4 text-textPrimary"></ChevronRightIcon>
                )}
            </div>
        </Card>
    );
};

export default DropdownButton;
