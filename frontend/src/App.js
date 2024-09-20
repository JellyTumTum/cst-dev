import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import BottomBar from './components/BottomBar';
import { useState, useEffect } from 'react';
import MainWindow from './components/MainWindow';

function App() {
    const [theme, setTheme] = useState('theme-dark-modern');
    const [selectedTab, setSelectedTab] = useState(null); // will eventually be welcome as the default tab
    const [openTabs, setOpenTabs] = useState([]); // Store open tabs as page objects

    const pages = [
        {
            name: "Welcome.js",
            path: ["cst-dev"],
            breadcrumbs: ["cst-dev", "Welcome.js"]
        },
        {
            name: "Lyriclabs.java",
            path: ["cst-dev", "Projects"],
            breadcrumbs: ["cst-dev", "Projects", "Lyriclabs.java"]
        },
        {
            name: "Project SAM.py",
            path: ["cst-dev", "Projects"],
            breadcrumbs: ["cst-dev", "Projects", "Project SAM.py"]
        }
    ];

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
            if (!prevTabs.find((tab) => tab.name === tabName)) {
                return [...prevTabs, page];
            }
            return prevTabs; 
        });
    };

    // Function to handle closing tabs
    const onTabClose = (tabName) => {
        setOpenTabs((prevTabs) => {
            const updatedTabs = prevTabs.filter((tab) => tab.name !== tabName);
    
            // update selectedTab if closed one is the current selected --> follows vs codes logic of selecting last one i
            if (selectedTab?.name === tabName) {
                if (updatedTabs.length > 0) {
                    setSelectedTab(updatedTabs[updatedTabs.length - 1]); 
                } else {
                    setSelectedTab(null); 
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
