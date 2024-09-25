import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Dropdown = ({ label, options, onSelect }) => {
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

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
                <span className="text-textMain">{label}</span>
                <ChevronDownIcon className="ml-2 w-5 h-5 text-textSecondary" />
            </div>

            {isOpen && (
                <div
                    className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-explorerMain
                    ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    <div className="py-1">
                        {options.map((option, index) => (
                            <div
                                key={index}
                                className="block px-4 py-2 text-textSecondary text-sm hover:bg-explorerHover hover:text-textMain cursor-pointer"
                                onClick={() => {
                                    onSelect(option);
                                    setIsOpen(false); // Close dropdown after selection
                                }}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
