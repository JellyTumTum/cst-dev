import React from "react";
import { useState } from "react";
import { Typography, Card } from '@material-tailwind/react';
import TabController from "./subComponents/TabController";
import Welcome from "./pages/Welcome";
import Programming from "./pages/Programming";
import Lyriclabs from "./pages/Lyriclabs";
import ProjectSAM from "./pages/ProjectSAM";

const MainWindow = ({ onTabClick, selectedTab, openTabs, onTabClose, pages }) => {
    const pageComponents = {
        'Welcome.txt': Welcome,
        'Lyric Labs.java': Lyriclabs,
        'Project SAM.py': ProjectSAM,
        'Programming.html': Programming,
    };
    const PageComponent = pageComponents[selectedTab?.name];
    console.log(selectedTab)
    console.log(openTabs)

    const [renderBreadcrumbs, setRenderBreadcrumbs] = useState(false);

    return (
        <div className="h-full w-full">
            <div className="h-[3rem] w-full">
                <TabController
                    openTabs={openTabs}
                    selectedTab={selectedTab}
                    onTabClick={onTabClick}
                    onTabClose={onTabClose}
                    pages={pages}
                />
            </div>
            {
                renderBreadcrumbs &&
                <div></div>
            }
            <div className="main-window">
                {/* If a matching component is found, render it; otherwise, show a fallback */}
                {PageComponent &&
                    <>
                        <PageComponent openTabs={openTabs} selectedTab={selectedTab} onLinkClick={onTabClick} pages={pages}></PageComponent>
                    </>
                    }
            </div>


        </div>

    );

};

export default MainWindow;
