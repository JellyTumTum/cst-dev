import React from "react";
import { Typography } from "@material-tailwind/react";
import LogoDisplay from "../subComponents/LogoDisplay";
import MultiLogoDisplay from "../subComponents/MutliLogoDisplay";
import LyriclabsSS from '../../screenshots/lyriclabs.png'
import DemoCard from "../subComponents/DemoCard";
import LinedParagraph from "../subComponents/LinedParagraph";

const Lyriclabs = ({ }) => {

    const isDark = localStorage.getItem('theme').includes('dark');
    const motivationParagraph = `Motivation:
    Lyric Labs was developed as the core software component of my undergraduate dissertation. The project aimed to explore memory recognition through song lyrics, in contrast to similar studies that focused on the audio aspect of music. 
    The idea stemmed from personal experiences listening to artists with similar styles, prompting the question, "If I were only given the lyrics, could I identify the artist?" This concept eventually evolved into a dissertation project, earning a first-class distinction with a 74% grade.`
    const stackParagraph = `Technology Choices:
    Given the importance of this project for my degree, I chose a Java backend, leveraging my familiarity with the language from previous university coursework. I opted to avoid learning a new backend technology at such a critical stage.
    As this was my first exposure to a frontend-heavy project, I decided to use React, a well-established web framework, to ensure a smoother learning curve. I’ve continued using React for subsequent projects due to its flexibility and wide support.
    The foundation of this project relied on accessing song lyrics and artist information, so I integrated Spotify and Musixmatch APIs to deliver the required data. While scalability wasn’t a primary concern due to the project’s scope, I did document considerations for scaling in my dissertation write-up.`

    return (
        <div>
            <div className="flex justify-center mt-2 h-24">
                <DemoCard
                    screenshotUrl={LyriclabsSS}
                    demoUrl="https://cst.dev/lyriclabs"
                    projectTitle="Lyric Labs"
                />
            </div>
            <Typography className="text-textMain text-xl font-bold p-5">Tech Stack</Typography>
            <div className="flex flex-row justify-evenly">

                <MultiLogoDisplay logoNames={["React", "Javascript"]} mainText={"React + Javascript"} subText={"Frontend"}></MultiLogoDisplay>
                <MultiLogoDisplay logoNames={["Spring", "Java"]} mainText={"Springboot + Java"} subText={"Backend"}></MultiLogoDisplay>
                <MultiLogoDisplay logoNames={["psql", "spotify"]} mainText={"PostgreSQL + Spotify API"} subText={"Data Storage + Retrieval"}></MultiLogoDisplay>
            </div>
            <Typography className="text-textMain text-xl font-bold p-5">Documentation</Typography>
            <LinedParagraph content={motivationParagraph}></LinedParagraph>
            <div className="h-[1rem]"></div>
            <LinedParagraph content={stackParagraph} startingNumber={4}></LinedParagraph>

        </div>
    );
};

export default Lyriclabs;

