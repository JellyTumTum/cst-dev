import jsIcon from '../seti-icons/javascript.svg';
import defaultIcon from '../seti-icons/default.svg';
import javaIcon from '../seti-icons/java.svg';
import pythonIcon from '../seti-icons/python.svg';
import htmlIcon from '../seti-icons/html.svg';
import reactIcon from '../seti-icons/react.svg';
import springIcon from '../seti-icons/spring.svg';
import fastApiIcon from '../other-icons/fastapi.svg';
import tailwindIcon from '../other-icons/tailwindcss.svg'
import psqlIcon from '../other-icons/postgresql.svg';
import spotifyIcon from '../other-icons/spotify.svg';
import d3Icon from '../other-icons/d3js.svg'

// Utility function to get icon based on file extension
export const getIconForFile = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase(); // Get file extension

    switch (extension) {
        case 'js':
        case 'javascript':
            return jsIcon;
        case 'py':
        case 'python':
            return pythonIcon;
        case 'java':
            return javaIcon;
        case 'html':
            return htmlIcon;
        case 'react':
            return reactIcon;
        case 'spring':
            return springIcon;
        case 'fastapi':
            return fastApiIcon;
        case 'tailwindcss':
        case 'tailwind':
            return tailwindIcon;
        case 'postgresql':
        case 'psql':
            return psqlIcon;
        case 'spotify':
            return spotifyIcon;
        case 'd3':
            return d3Icon;
        default:
            return defaultIcon; // Fallback to default icon if no match
    }
};

export const stripFileExtension = (fileName) => {
    // console.log(fileName + typeof(fileName))
    const lastDotIndex = fileName.lastIndexOf(".");
    if (lastDotIndex === -1) return fileName; // No extension found, return the full name
    return fileName.slice(0, lastDotIndex); // Return the name without the extension
};
