import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Card } from "@material-tailwind/react";
import DropdownButton from "./DropdownButton";

const Dropdown = ({ labels, position = "below" }) => {
    const [isOpen, setIsOpen] = useState(false);
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

    // Determine the positioning classes
    const getPositionClasses = () => {
        switch (position) {
            case 'above':
                return 'bottom-full mb-2'; // Above the button
            case 'below':
                return 'top-full'; // Below the button
            case 'left':
                return 'right-full mr-2'; // To the left of the button
            case 'right':
                return 'left-full ml-2'; // To the right of the button
            default:
                return 'top-full mt-2'; // Default to below
        }
    };

    return (
        <Card
            ref={dropdownRef}
            className={`absolute ${getPositionClasses()} bg-dropdownBackground border-[1px] rounded-lg border-borderColor w-auto h-auto shadow-lg p-1`}
        >
            <DropdownButton label="Test"></DropdownButton>

        </Card>

    );
};

export default Dropdown;
