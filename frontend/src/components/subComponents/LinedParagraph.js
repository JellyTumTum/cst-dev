import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Typography } from "@material-tailwind/react";

const LinedParagraph = ({ content, startingNumber = 1, closeable = true }) => {
    const lines = content.split("\n");
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        if (closeable) {
            setIsCollapsed(!isCollapsed);
        }
    };

    const getIndentationLevel = (line) => {
        const leadingSpaces = line.match(/^(\s*)/)[0].length;
        return Math.floor(leadingSpaces / 4); // 4 spaces for a tab
    };

    return (
        <div className=" overflow-hidden flex-row mr-4">
            {/* Line numbers and indentation */}
            <div className="group text-lineNumberColor ml-[2rem]">
                {lines.map((line, index) => {
                    const indentationLevel = getIndentationLevel(line);

                    return (
                        <div key={index} className="flex">
                            {/* Line number */}
                            {!isCollapsed || index === 0 ? (
                                <div className="text-md w-12 flex flex-row min-w-12 hidden sm:flex">
                                    <Typography>{index + 1 + (startingNumber - 1)}</Typography>
                                    {index === 0 ? (
                                        <span
                                            onClick={toggleCollapse}
                                            className={`${closeable ? 'opacity-100 cursor-pointer' : 'opacity-0'}`}
                                        >
                                            {isCollapsed ? (
                                                <ChevronRightIcon className="w-4 h-4 mt-1 ml-1 text-textSecondary" />
                                            ) : (
                                                <ChevronDownIcon className="w-4 h-4 mt-1 ml-1 text-textSecondary" />
                                            )}
                                        </span>
                                    ) : null}
                                </div>
                                
                            ) : null}

                            {/* Indentation and text */}
                            {!isCollapsed || index === 0 ? (
                                <div className="flex text-wrap">
                                    {/* Render indentation levels */}
                                    {Array(indentationLevel).fill(null).map((_, indentIndex) => (
                                        <div key={indentIndex} className="flex flex-row">
                                            <div className="w-[0.1rem] h-full bg-borderColor hidden sm:flex"></div>
                                            <div className="w-[2.5rem] h-full hidden sm:flex"></div>
                                        </div>
                                    ))}

                                    {/* Render the line with text wrapping */}
                                    <div
                                        className={`flex`}
                                    >

                                        <Typography className={`text-textMain break-words ${(index === 0 && closeable) ? 'font-bold sm:font-normal' : ''}`}>
                                            {line.trim() === "" ? " " : line}
                                        </Typography>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default LinedParagraph;
