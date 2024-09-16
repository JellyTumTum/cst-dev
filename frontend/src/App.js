import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import BottomBar from './components/BottomBar';
import { useState, useEffect } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import MainWindow from './components/MainWindow';

function App() {
    const [theme, setTheme] = useState('theme-dark-modern');
    const [selectedTab, setSelectedTab] = useState(null); // will eventually be welcome as thats what it opens too
    const [openTabs, setOpenTabs] = useState([]); // will eventually have welcome in it

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'theme-dark-modern';
        setTheme(savedTheme);
        document.documentElement.className = savedTheme; // Apply the theme class to <html>
    }, []);

    const onTabClick = (tabName) => {
        setOpenTabs((prevTabs) => {
            setSelectedTab(tabName)
            if (!prevTabs.includes(tabName)) {
                return [...prevTabs, tabName];
            }
            return prevTabs; 
        });
    };

    // Switch theme and save it in localStorage
    // const switchTheme = () => {
    //     COMPLETE (need newTheme from the buttons whenever they are made)
    //     setTheme(newTheme);
    //     document.documentElement.className = newTheme;
    //     localStorage.setItem('theme', newTheme);
    // };

    return (
        <div className='min-h-screen h-full w-full bg-mainBackground flex flex-col'>
            <div className="h-[2.5rem] w-full">
                <TopBar />
            </div>

            <div className="flex-grow flex">
                <div className="w-[19.5rem] h-full">
                    <SideBar onTabClick={onTabClick} selectedTab={selectedTab} openTabs={openTabs}/>
                </div>

                <div className="flex-grow bg-mainBackground overflow-auto">
                    <MainWindow onTabClick={onTabClick} selectedTab={selectedTab} openTabs={openTabs}></MainWindow>
                </div>
            </div>

            <div className="h-[2rem] w-full">
                <BottomBar />
            </div>
        </div>
    );

}

export default App;
