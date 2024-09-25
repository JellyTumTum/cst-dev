import React from "react";
import { Typography, Card, Button } from '@material-tailwind/react';

const TopBarButton = ({ name, clickable, children, isTouch = false }) => {

    return (
        <div className={`bg-topBarBackground rounded-[4px] border-0 flex justify-center items-center my-[3px]
        ${clickable ? 'hover:bg-topBarHover cursor-default' : 'cursor-default'}
        `}>
            <Typography className={` text-md mx-[6px]
            ${clickable ? 'text-textMain' : 'text-textSecondary'}`}>{name}</Typography>
        </div>

    );

};

export default TopBarButton;
