import { Typography, Card } from "@material-tailwind/react";
import { getIconForFile } from "../../utils/iconUtils";

const LogoDisplay = ({ logoName, mainText, subText }) => {
    const iconUrl = getIconForFile("." + logoName);

    return (
        <Card className="
        bg-explorerMain border-2 border-borderColor
        w-auto h-auto flex flex-col items-center justify-center">
            <div className='flex justify-center items-center'>
                <img
                    src={iconUrl}
                    alt={`${logoName} icon`}
                    className="w-12 h-12 md:w-24 md:h-24"
                />
            </div>
            <div className="flex flex-col justify-center items-center mb-2">
                {mainText && (
                    <Typography className="text-textMain text-md md:text-lg px-2">
                        {mainText}
                    </Typography>
                )}
                {subText && (
                    <Typography className="text-textSecondary text-sm md:text-sm px-2">
                        {subText}
                    </Typography>
                )}
            </div>
        </Card>
    );
};

export default LogoDisplay;
