import { Typography, Card } from "@material-tailwind/react";
import React from "react";
import FileName from "../subComponents/FileName";
import LinedParagraph from "../subComponents/LinedParagraph";
import LogoDisplay from "../subComponents/LogoDisplay";

const Programming = ({ }) => {
    const informationParagraph = `Examples:
To explore examples of the languages and frameworks I have worked with, you can:
    - Access the source code for my projects, which is available on GitHub.
    - View documentation and interact with live instances directly on this site.
        Please refer to the 'Projects' section for more information.`

    return (
        <div>
            <div className="flex justify-center mt-2">
                <Typography className="text-textMain text-xl font-bold">Programming Experience</Typography>

            </div>
            <Typography className="text-textMain text-xl font-bold p-5">Languages</Typography>
            <div className="flex flex-row justify-evenly">

                <LogoDisplay logoName={"Javascript"} mainText={"Javascript"} subText={"Frontend"}></LogoDisplay>
                <LogoDisplay logoName={"Java"} mainText={"Java"} subText={"Backend"}></LogoDisplay>
                <LogoDisplay logoName={"Python"} mainText={"Python"} subText={"Backend"}></LogoDisplay>
            </div>
            <Typography className="text-textMain text-xl font-bold p-5">Frameworks & Systems</Typography>
            <div className="flex flex-row justify-evenly">

                <LogoDisplay logoName={"React"} mainText={"React"} subText={"Frontend"}></LogoDisplay>
                <LogoDisplay logoName={"Spring"} mainText={"Spring (springboot)"} subText={"Backend"}></LogoDisplay>
                <LogoDisplay logoName={"FastAPI"} mainText={"FastAPI"} subText={"Backend"}></LogoDisplay>
                <LogoDisplay logoName={"TailwindCSS"} mainText={"TailwindCSS"} subText={"Frontend"}></LogoDisplay>
                <LogoDisplay logoName={"PostgreSQL"} mainText={"postgresql"} subText={"Databases"}></LogoDisplay>
            </div>
            <div className="mt-16">
                <LinedParagraph content={informationParagraph}></LinedParagraph>
            </div>

        </div>
    );
};

export default Programming;
