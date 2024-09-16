import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon, FolderIcon } from '@heroicons/react/24/outline';
import { Typography } from "@material-tailwind/react";

const ToggleableFolder = ({ name, indentLevel = 0, topLevel = false, open = true, children }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleFolder = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Folder row */}
      <div
        className={`cursor-pointer flex items-center hover:bg-explorerHover`}
        onClick={toggleFolder}
        style={{ paddingLeft: `${indentLevel}rem` }}
      >
        {isOpen ? (
          <ChevronDownIcon className="w-6 h-6 mr-2 text-textMain pl-1" />
        ) : (
          <ChevronRightIcon className="w-6 h-6 mr-2 text-textMain pl-1" />
        )}
        <Typography className={`${topLevel ? 'font-bold uppercase text-sm' : 'text-md'} text-textMain`}>{name}</Typography>
      </div>

      {/* Render children only when folder is open */}
      <div className={` ${isOpen ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default ToggleableFolder;
