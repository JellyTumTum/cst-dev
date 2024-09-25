import React from "react";
import { Typography } from "@material-tailwind/react";
import LogoDisplay from "../subComponents/LogoDisplay";
import MultiLogoDisplay from "../subComponents/MutliLogoDisplay";
import LyriclabsSS from '../../screenshots/lyriclabs.png'
import DemoCard from "../subComponents/DemoCard";
import LinedParagraph from "../subComponents/LinedParagraph";

const Website = ({ }) => {

    const isDark = localStorage.getItem('theme').includes('dark');
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
                    screenshotUrl={LyriclabsSS} // TODO: change to website screenshot nearer to end
                    demoUrl=""
                    projectTitle="cst.dev"
                    preText=""
                />
            </div>
            <Typography className="text-textMain text-xl font-bold p-5">Tech Stack</Typography>
            <div className="flex flex-col md:flex-row justify-evenly m-4">

                <MultiLogoDisplay logoNames={["React", "tailwind", "material-tailwind", "Javascript"]} mainText={"React + TailwindCSS & Material Tailwind + Javascript"} subText={"Frontend"}></MultiLogoDisplay>
            </div>
            <Typography className="text-textMain text-xl font-bold p-5">Documentation</Typography>
            <LinedParagraph content={designParagraph}></LinedParagraph>
            <div className="h-[1rem]"></div>
            <LinedParagraph content={adaptationParagraph} startingNumber={4}></LinedParagraph>

        </div>
    );
};

export default Website;

