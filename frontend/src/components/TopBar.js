import React from "react";
import { Typography, Card } from '@material-tailwind/react';

const TopBar = () => {

    return (
        <div className="bg-topBarBackground w-full h-full border-b-[1px] border-borderColor flex justify-center items-center">

            <Card className="bg-topBarSearchBox  border-[1px] border-borderColor  
                            w-[33.75%] h-[64%]
                            flex justify-center items-center
                            rounded-md
                            ">
                <Typography className="text-textSecondary text-md">
                    cst.dev
                </Typography>
            </Card>
        </div>
    );

};

export default TopBar;
