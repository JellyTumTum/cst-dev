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
    const [sideBarWidth, setSideBarWidth] = useState(100000)
    const pages = [
        {
            name: "Welcome.txt",
            path: ["cst-dev"],
            breadcrumbs: ["cst-dev", "Welcome.txt"]
        },
        {
            name: "This Website.js",
            path: ["cst-dev", "Projects"],
            breadcrumbs: ["cst-dev", "Projects", "This Website.js"]
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

    const [selectedTab, setSelectedTab] = useState(pages[0]); // will eventually be welcome as the default tab
    const [openTabs, setOpenTabs] = useState([pages[0]]); // Store open tabs as page object
    const [isExplorerOpen, setExplorerOpen] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'theme-dark-modern';
        setTheme(savedTheme);
        document.documentElement.className = savedTheme; // Apply the theme class to <html>
    }, []);

    const changeTheme = (themeName) => {
        setTheme(themeName);
        localStorage.setItem('theme', themeName)
        document.documentElement.className = themeName; // Apply the theme class to <html>
    };

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
                }
            }

            return updatedTabs;
        });
    };

    const checkSideBarWidth = (container) => {
        setSideBarWidth(container.scrollWidth); // container.clientWidth
    };

    useEffect(() => {
        const container = document.getElementById('sidebar');
        checkSideBarWidth(container); // Check initially
        window.addEventListener('resize', checkSideBarWidth); // Recheck on resize

        return () => window.removeEventListener('resize', checkSideBarWidth);
    }, [isExplorerOpen]);

    return (
        <div className='min-h-screen h-full w-full bg-mainBackground flex flex-col'>
            {/* TopBar */}
            <div className="h-[2.5rem] min-h-[2.5rem] w-full">
                <TopBar changeTheme={changeTheme}/>
            </div>

            {/* Main Content: SideBar and MainWindow */}
            <div className="flex-grow flex overflow-hidden">
                <div id='sidebar' className={`${ isExplorerOpen ? 'w-[19.5rem]' : 'w-[4.25rem'} h-full`}>
                    <SideBar
                        onTabClick={onTabClick}
                        selectedTab={selectedTab}
                        openTabs={openTabs}
                        pages={pages}
                        isExplorerOpen={isExplorerOpen}
                        setExplorerOpen={setExplorerOpen}
                    />
                </div>

                <div className="flex-grow bg-mainBackground overflow-hidden">
                    <MainWindow
                        selectedTab={selectedTab}
                        openTabs={openTabs}
                        onTabClick={onTabClick}
                        onTabClose={onTabClose}
                        pages={pages}
                        isExplorerOpen={isExplorerOpen}
                    />
                </div>
            </div>

            {/* BottomBar */}
            <div className="h-[1.8rem] w-full">
                <BottomBar />
            </div>
        </div>
    );
}

export default App;
