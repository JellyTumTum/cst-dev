import React from "react";
import { Typography } from "@material-tailwind/react";
import LogoDisplay from "../subComponents/LogoDisplay";
import MultiLogoDisplay from "../subComponents/MutliLogoDisplay";
import SAMDark from '../../screenshots/SAM-Dark.png';
import SAMLight from '../../screenshots/SAM-Light.png';
import DemoCard from "../subComponents/DemoCard";
import LinedParagraph from "../subComponents/LinedParagraph";
import CodebaseLink from "../subComponents/CodebaseLink";

const ProjectSAM = ({ }) => {

    let localTheme = localStorage.getItem('theme') || '';
    if (localTheme == '') {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localTheme = 'theme-dark-modern';
        }
    }
    const isDark = localTheme.includes('dark');
    const motivationParagraph = `Motivation:
    This project was inspired by the "Wikipedia Game," where players navigate between Wikipedia pages using hyperlinks. I wanted to explore whether a similar concept could be applied to Spotify artists—specifically, finding connections between two artists through their collaborations. 
    The idea to graph these connections came from a YouTube video (linked below), which I adapted to create a standalone version for this project.`
    const stackParagraph = `Stack Selection:
    I chose D3.js for visualizing the graphs, as its dynamic approach to rendering nodes aligned well with the physics-based layout I envisioned. Initially, I hoped that the real-time addition of nodes during the search process would integrate seamlessly with D3’s physics engine. 
    However, on larger graphs, the physics calculations became too intensive, leading me to impose limits on the graph size. While this restriction prevents graphing larger sections of Spotify as originally intended, the project remains a fun visualization tool. 
    Despite its limitations, the project has been a valuable learning experience, though it lacks the scalability needed for further expansion into new features.`





    return (
        <div>
            <div className="flex justify-center mt-2 h-24">
            <DemoCard
                    screenshotUrl={isDark ? SAMDark : SAMLight}
                    demoUrl="https://cst.dev/sam"
                    projectTitle="Project S.A.M"
                />
            </div>
            <Typography className="text-textMain text-xl font-bold p-5">Tech Stack</Typography>
            <div className="flex flex-col md:flex-row justify-evenly gap-2 mx-2">

                <MultiLogoDisplay logoNames={["React", "d3", "Javascript"]} mainText={"React + d3.js + Javascript"} subText={"Frontend"}></MultiLogoDisplay>
                <MultiLogoDisplay logoNames={["FastAPI", "Python"]} mainText={"FastAPI + Python"} subText={"Backend"}></MultiLogoDisplay>
                <MultiLogoDisplay logoNames={["psql", "spotify"]} mainText={"PostgreSQL + Spotify API"} subText={"Data Storage + Retrieval"}></MultiLogoDisplay>
            </div>
            <CodebaseLink link={"https://github.com/JellyTumTum/sam"} className={"mt-4"}></CodebaseLink>
            <Typography className="text-textMain text-xl font-bold p-5">Documentation</Typography>

            <LinedParagraph content={motivationParagraph}></LinedParagraph>
            <div className="h-[1rem]"></div>
            <LinedParagraph content={stackParagraph} startingNumber={3}></LinedParagraph>



        </div>
    );
};

export default ProjectSAM;

