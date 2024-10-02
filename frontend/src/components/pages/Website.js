import React from "react";
import { Typography } from "@material-tailwind/react";
import LogoDisplay from "../subComponents/LogoDisplay";
import MultiLogoDisplay from "../subComponents/MutliLogoDisplay";
import DemoCard from "../subComponents/DemoCard";
import LinedParagraph from "../subComponents/LinedParagraph";
import LightScreenshot from '../../screenshots/website-light.png';
import DarkModernScreenshot from '../../screenshots/website-dark-modern.png';
import DarkPlusScreenshot from '../../screenshots/website-dark-plus.png';
import SolarizedDarkScreenshot from '../../screenshots/website-solarized-dark.png';
import CodebaseLink from "../subComponents/CodebaseLink";

const Website = ({ }) => {

    let localTheme = localStorage.getItem('theme') || '';
    if (localTheme == '') {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localTheme = 'theme-dark-modern';
        }
    }
    let screenshot = LightScreenshot;
    if (localTheme.includes("dark-modern")) {
        screenshot = DarkModernScreenshot;
    } else if (localTheme.includes("solarized-dark")) {
        screenshot = SolarizedDarkScreenshot;
    } else if (localTheme.includes("dark")) {
        screenshot = DarkPlusScreenshot;
    }

    const designParagraph = `Design:
    When I set out to create a website to showcase my projects, no particular design immediately stood out to me. I had some ideas, but none felt quite right. Then, it hit me: I spend so much time working inside an IDE, why not emulate that experience for my own website? It provided a creative yet familiar foundation, and using TailwindCSS, I could focus on refining my frontend skills with the clear goal in mind.
    All credit goes to Microsoft—if I did a good job, it should be apparent that VS Code was my reference. my own text editor / IDE of choice.`
    const adaptationParagraph = `Adaptations:
    To get through the prototyping phase, I needed a solid concept. IDEs and text editors are all about presenting information efficiently, so I removed the need for browser tabs and introduced internal tabs within the site, just like in VS Code. Navigating through pages was a natural fit for the classic file tree structure, offering intuitive folder categorization and expandable lists.
    
    With the core features in place, I had three choices for each additional aspect:
        1. Replicate the feature with an adapted use case.
        2. Include the visual elements without interactive functionality.
        3. Ignore features that didn't suit a non-IDE environment, or presented too large of a challenge for no major purpose 

    Ultimately, this project provided a fun creative challenge, pushing me to achieve a high standard while maintaining the design’s resemblance to the IDE I use daily.`

    return (
        <div>
            <div className="flex justify-center mt-2 h-24">
                <DemoCard
                    screenshotUrl={screenshot}
                    demoUrl=""
                    projectTitle="cst.dev"
                    preText=""
                />
            </div>
            <div className="p-5 justify-between flex-row flex">
                <Typography className="text-textMain text-xl font-bold">Tech Stack</Typography>
            </div>
            <div className="flex flex-row justify-evenly flex-wrap gap-2 mx-2">
                <MultiLogoDisplay logoNames={["React", "tailwind", "material-tailwind", "Javascript"]} mainText={"React + TailwindCSS & Material Tailwind + Javascript"} subText={"Frontend"}></MultiLogoDisplay>
            </div>
            <CodebaseLink link={"https://github.com/JellyTumTum/cst-dev"} className={"mt-4"}></CodebaseLink>
            <Typography className="text-textMain text-xl font-bold p-5">Documentation</Typography>
            <LinedParagraph content={designParagraph}></LinedParagraph>
            <div className="h-[1rem]"></div>
            <LinedParagraph content={adaptationParagraph} startingNumber={4}></LinedParagraph>

        </div>
    );
};

export default Website;

