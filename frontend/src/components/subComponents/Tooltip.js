import React, { useState } from "react";

const Tooltip = ({ children, content, position = "top" }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Handle hover states
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    // Tooltip positioning classes based on the `position` prop
    const getPositionClass = () => {
        switch (position) {
            case "top":
                return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
            case "bottom":
                return "top-full left-1/2 transform -translate-x-1/2 mt-2";
            case "left":
                return "right-full top-1/2 transform -translate-y-1/2 mr-2";
            case "right":
                return "left-full top-1/2 transform -translate-y-1/2 ml-2";
            default:
                return "top-full left-1/2 transform -translate-x-1/2 mt-2";
        }
    };

    return (
        <div className="relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* The element that will show the tooltip on hover */}
            {children}

            {/* Tooltip */}
            {isHovered && (
                <div
                    className={`absolute z-50 p-2 bg-gray-800 text-white text-sm rounded shadow-lg ${getPositionClass()}`}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
