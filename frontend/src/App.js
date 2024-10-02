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

    const [selectedTab, setSelectedTab] = useState(pages[0]); 
    const [openTabs, setOpenTabs] = useState([pages[0]]);
    const [isExplorerOpen, setExplorerOpen] = useState(false);
    const [tabHistory, setTabHistory] = useState([pages[0]]);
    const [tabPointer, setTabPointer] = useState(0);

    const [smallScreen, setSmallScreen] = useState(false);

    // This code is also inside onTabClick, not as the function though to avoid passing addTabToHistory around everywhere onTabClick is passed into 
    const addTabToHistory = (page) => {
        // discard new history if not at the front of the list already
        const newHistory = tabHistory.slice(0, tabPointer + 1);
        setTabHistory([...newHistory, page]);
        setTabPointer(tabPointer + 1);

    };

    const goBack = () => {
        setTabPointer((prevPointer) => {
            if (prevPointer > 0) {
                const newPointer = prevPointer - 1;
                const newTab = tabHistory[newPointer];

                if (openTabs.some(tab => tab.name === newTab.name)) {
                    setSelectedTab(newTab);
                } else {
                    setOpenTabs(prevTabs => {
                        setSelectedTab(newTab);
                        if (!prevTabs.some(tab => tab.name === newTab.name)) {
                            return [...prevTabs, newTab];
                        }
                        return prevTabs;
                    });
                }

                return newPointer;
            }
            return prevPointer;
        });
    };

    const goForward = () => {
        if (tabPointer < tabHistory.length - 1) {
            setTabPointer((prevPointer) => {
                const newPointer = prevPointer + 1;
                const newTab = tabHistory[newPointer];

                setOpenTabs(prevOpenTabs => {
                    if (!prevOpenTabs.some(tab => tab.name === newTab.name)) {
                        return [...prevOpenTabs, newTab];
                    }
                    return prevOpenTabs;
                });

                setSelectedTab(newTab);
                return newPointer;
            });
        }
    };

    const handleResize = () => {
        if (window.innerWidth < 640) { // Adjust breakpoint as necessary
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    };

    useEffect(() => {
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => { // added as the other one didnt seem to run on pageload.
        handleResize();
        const isSmallScreen = window.innerWidth < 640 || window.outerWidth < 640
        console.log(isSmallScreen)
        setExplorerOpen(!isSmallScreen);
    }, []);
    

    useEffect(() => {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        let savedTheme = localStorage.getItem('theme') || 'notheme';
        if (prefersDark && savedTheme === 'notheme') {
            savedTheme = localStorage.getItem('theme') || 'theme-dark-modern';
        } else if (savedTheme === 'notheme') {
            savedTheme = localStorage.getItem('theme') || 'theme-light-modern';
        }
        setTheme(savedTheme);
        document.documentElement.className = savedTheme;
    }, []);

    const changeTheme = (themeName) => {
        setTheme(themeName);
        localStorage.setItem('theme', themeName)
        document.documentElement.className = themeName;
    };

    const onTabClick = (tabName) => {
        const page = pages.find((page) => page.name === tabName);

        setOpenTabs((prevTabs) => {
            
            if (smallScreen) {
                setExplorerOpen(false);
            }
            // addTabToHistory(page) --> code is the 8 lines below. 
            const newHistory = tabHistory.slice(0, tabPointer + 1);
            if (newHistory[newHistory.length - 1] !== page) {
                setTabHistory(() => {
                    return [...newHistory, page]
                });
                setTabPointer(tabPointer + 1);
            }
            setSelectedTab(page);


            if (prevTabs) {
                if (!prevTabs.find((tab) => tab.name === tabName)) {
                    return [...prevTabs, page];
                } else {
                    return prevTabs;
                }
            } else {
                return [page];
            }

        });
    };

    const onTabClose = (pageToClose) => {
        setOpenTabs((prevTabs) => {
            const updatedTabs = prevTabs.filter((tab) => tab.name !== pageToClose.name);

            if (selectedTab?.name === pageToClose.name) {
                if (updatedTabs.length > 0) {
                    setSelectedTab(updatedTabs[updatedTabs.length - 1]);
                } else {
                    setSelectedTab(null);
                }
            }

            return updatedTabs;
        });
    };

    const checkSideBarWidth = (container) => {
        setSideBarWidth(container.scrollWidth);
    };

    useEffect(() => {
        const container = document.getElementById('sidebar');
        checkSideBarWidth(container); 
        window.addEventListener('resize', checkSideBarWidth);

        return () => window.removeEventListener('resize', checkSideBarWidth);
    }, [isExplorerOpen]);

    return (
        <div className='min-h-screen h-full w-full bg-mainBackground flex flex-col '>
            {/* TopBar */}
            <div className="h-[2.5rem] min-h-[2.5rem] w-full">
                <TopBar
                    changeTheme={changeTheme}
                    tabHistory={tabHistory} setTabHistory={setTabHistory}
                    openTabs={openTabs} setOpenTabs={setOpenTabs}
                    tabPointer={tabPointer} setTabPointer={setTabPointer}
                    goBack={goBack} goForward={goForward}
                    selectedTab={selectedTab} setSelectedTab={setSelectedTab}

                />
            </div>

            {/* Main Content: SideBar and MainWindow */}
            <div className="flex-grow flex overflow-hidden">
                <div id='sidebar' className={`${isExplorerOpen ? `${smallScreen ? 'w-full' : 'w-[19.5rem]' }` : 'w-[4.25rem'} h-full`}>
                    <SideBar
                        onTabClick={onTabClick}
                        tabPointer={tabPointer}
                        setTabPointer={tabPointer}
                        selectedTab={selectedTab}
                        openTabs={openTabs}
                        pages={pages}
                        isExplorerOpen={isExplorerOpen}
                        setExplorerOpen={setExplorerOpen}
                        smallScreen={smallScreen}
                    />
                </div>

                <div className={` bg-mainBackground overflow-hidden 
                    ${isExplorerOpen ? `${smallScreen ? 'hidden w-0' : 'flex flex-grow'}`:`flex flex-grow`}`}>
                    <MainWindow
                        selectedTab={selectedTab}
                        openTabs={openTabs}
                        onTabClick={onTabClick}
                        tabPointer={tabPointer}
                        setTabPointer={tabPointer}
                        onTabClose={onTabClose}
                        goBack={goBack}
                        pages={pages}
                        isExplorerOpen={isExplorerOpen}
                    />
                </div>
            </div>

            {/* BottomBar */}
            <div className="h-[1.8rem] min-h-[1.8rem] w-full">
                <BottomBar openTab={selectedTab} />
            </div>
        </div>
    );
}

export default App;
