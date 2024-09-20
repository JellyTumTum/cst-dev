import jsIcon from '../seti-icons/javascript.svg';
import defaultIcon from '../seti-icons/default.svg';
import javaIcon from '../seti-icons/java.svg';
import pythonIcon from '../seti-icons/python.svg';

// Utility function to get icon based on file extension
export const getIconForFile = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase(); // Get file extension

    switch (extension) {
        case 'js':
            return jsIcon;
        case 'py':
            return pythonIcon;
        case 'java':
            return javaIcon;
        default:
            return defaultIcon; // Fallback to default icon if no match
    }
};

export const stripFileExtension = (fileName) => {
    const lastDotIndex = fileName.lastIndexOf(".");
    if (lastDotIndex === -1) return fileName; // No extension found, return the full name
    return fileName.slice(0, lastDotIndex); // Return the name without the extension
};
