import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { Card } from "@material-tailwind/react";
import DropdownButton from "./DropdownButton";

const Dropdown = ({ information, position = "below", fade = false, showVariable, setShowVariable }) => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && setShowVariable) { // && setShowVariable removes an error. This currently means that every click closes all dropdowns but apart from on hoverable buttons this is intended behaviour. hopefully the hover is intuitive enough to prevent people from clicking hoverbuttons. guess VSCode has one up on me here.
                setShowVariable((prev) => !prev);
                console.log("false")
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
                return 'left-full ml-1'; // To the right of the button
            default:
                return 'top-full mt-2'; // Default to below
        }
    };

    return (
        <div>
            {showVariable &&
                <Card
                    ref={dropdownRef}
                    className={`absolute ${getPositionClasses()} bg-dropdownBackground border-[1px] flex flex-grow rounded-lg border-borderColor w-auto h-auto shadow-lg p-1
        ${fade ? 'transition-opacity duration-500 ' : ' '}`}
                >
                    {information.map((button, index) => (
                        <DropdownButton
                            key={index}
                            label={button.label}
                            onClick={button.onClick}
                            keybind={button.keybind}
                            position={button.position}
                        >
                            {button.children}
                        </DropdownButton>
                    ))}

                </Card>}

        </div>


    );
};

export default Dropdown;
