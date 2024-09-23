import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import BottomBar from './components/BottomBar';
import { useState, useEffect } from 'react';
import MainWindow from './components/MainWindow';
import Programming from './components/pages/Programming';
import Welcome from './components/pages/Welcome';

function App() {
    const [theme, setTheme] = useState('theme-dark-modern');
    const pages = [
        {
            name: "Welcome.txt",
            path: ["cst-dev"],
            breadcrumbs: ["cst-dev", "Welcome.txt"]
        },
        {
            name: "Lyric Labs.java",
            path: ["cst-dev", "Projects"],
            breadcrumbs: ["cst-dev", "Projects", "Lyric Labs.java"]
        },
        {
            name: "Project SAM.py",
            path: ["cst-dev", "Projects"],
            breadcrumbs: ["cst-dev", "Projects", "Project SAM.py"]
        },
        {
            name: "Programming.html",
            path: ["cst-dev", "Experience"],
            breadcrumbs: ["cst-dev", "Experience", "Programming.html"],
        }
    ];

    const [selectedTab, setSelectedTab] = useState(null); // will eventually be welcome as the default tab
    const [openTabs, setOpenTabs] = useState(null); // Store open tabs as page object

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'theme-dark-modern';
        setTheme(savedTheme);
        document.documentElement.className = savedTheme; // Apply the theme class to <html>
    }, []);

    const onTabClick = (tabName) => {
        console.log(openTabs)
        console.log(selectedTab)
        const page = pages.find((page) => page.name === tabName);
        console.log(`page = ${page}`)

        setOpenTabs((prevTabs) => {
            setSelectedTab(page);
            if (prevTabs) {
                if (!prevTabs.find((tab) => tab.name === tabName)) {
                    return [...prevTabs, page];
                } else {
                    return prevTabs;
                }
            } else {
                //  empty prevTabs
                return [page];
            }
            
        });
    };

    // Function to handle closing tabs
    const onTabClose = (pageToClose) => {
        console.log(pageToClose)
        setOpenTabs((prevTabs) => {
            console.log(prevTabs)
            const updatedTabs = prevTabs.filter((tab) => tab.name !== pageToClose.name);
            console.log(updatedTabs)

            // update selectedTab if closed one is the current selected --> follows vs codes logic of selecting last one i
            if (selectedTab?.name === pageToClose.name) {
                if (updatedTabs.length > 0) {
                    setSelectedTab(updatedTabs[updatedTabs.length - 1]);
                    console.log(updatedTabs[updatedTabs.length - 1]);
                } else {
                    setSelectedTab(null);
                    console.log("NO tab to set as new selected")
                }
            }

            return updatedTabs;
        });
    };

    return (
        <div className='min-h-screen h-full w-full bg-mainBackground flex flex-col'>
            <div className="h-[2.5rem] w-full">
                <TopBar />
            </div>

            <div className="flex-grow flex">
                <div className="w-[19.5rem] h-full">
                    <SideBar onTabClick={onTabClick} selectedTab={selectedTab} openTabs={openTabs} pages={pages} />
                </div>

                <div className="flex-grow bg-mainBackground overflow-auto">
                    <MainWindow
                        selectedTab={selectedTab}
                        openTabs={openTabs}
                        onTabClick={onTabClick}
                        onTabClose={onTabClose}
                        pages={pages}
                    />
                </div>
            </div>

            <div className="h-[2rem] w-full">
                <BottomBar />
            </div>
        </div>
    );
}

export default App;
