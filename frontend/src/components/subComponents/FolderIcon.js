import { getIconForFile, getIconForFolder } from "vscode-icons-js";

const FolderIcon = ({ isOpen }) => {
    const iconClass = getIconForFolder(isOpen); // Get icon class based on folder open/close state
    return (
        <i className={iconClass} style={{ fontSize: "24px" }}>
            {isOpen ? "Open Folder" : "Closed Folder"}
        </i>
    );
};

export default FolderIcon;