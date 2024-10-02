import { Typography, Card } from "@material-tailwind/react";
import { getIconForFile } from "../../utils/iconUtils";

const MultiLogoDisplay = ({ logoNames = [], mainText, subText }) => {
    return (
        <Card className="
            bg-explorerMain border-2 border-borderColor
            w-auto h-auto flex flex-col items-center justify-center">

            <div
                className={`w-auto h-auto grid gap-4 p-2 
                            ${logoNames.length > 1 ? 'grid-cols-2 ' : 'grid-cols-1'} 
                            md:flex md:flex-row justify-center items-center`}
            >
                {logoNames.map((logoName, index) => {
                    const iconUrl = getIconForFile("." + logoName);
                    return (
                        <div key={index} className='flex justify-center items-center'>
                            <img
                                src={iconUrl}
                                alt={`${logoName} icon`}
                                className="w-12 h-12 md:w-24 md:h-24"
                            />
                        </div>
                    );
                })}
            </div>


            <div className="flex flex-col justify-center items-center mb-2">
                {mainText && (
                    <Typography className="text-textMain text-center text-lg px-2">
                        {mainText}
                    </Typography>
                )}
                {subText && (
                    <Typography className="text-textSecondary text-sm px-2">
                        {subText}
                    </Typography>
                )}
            </div>
        </Card>
    );
};

export default MultiLogoDisplay;
