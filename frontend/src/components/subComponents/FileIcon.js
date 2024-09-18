import React from "react";
import { getIconForFile } from "../../utils/iconUtils"; // Import the utility function

const FileIcon = ({ fileName }) => {
    const iconUrl = getIconForFile(fileName); // Get the correct icon for the file

    // Check if it's a default icon to apply custom styling
    const requireStyling = iconUrl.includes("default");
    console.log(requireStyling);

    return (
        // Conditional rendering based on whether requireStyling is true
        requireStyling ? (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 1000"
                className={`w-7 h-7 fill-current text-textMain`}
            >
                <path d="M394.1 537.8h411.7v54.7H394.1v-54.7zm0-130.3H624v54.7H394.1v-54.7zm0-130.3h411.7v54.7H394.1v-54.7zm0 390.9H700v54.7H394.1v-54.7z" fill="currentColor" />
            </svg>
        ) : (
            <img
                src={iconUrl}
                alt={`${fileName} icon`}
                className="w-7 h-7" // Apply default styles for the image
            />
        )
    );
};

export default FileIcon;
