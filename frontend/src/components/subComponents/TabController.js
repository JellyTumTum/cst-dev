import React from 'react';
import Tab from './Tab';

const TabController = ({ openTabs, selectedTab, onTabClick, onTabClose, pages }) => {

    // console.log(tabNames)

    return (
        <div
            className="h-full w-full flex flex-row overflow-x-auto 
            border-borderColor bg-tabBackground"
            style={{ whiteSpace: 'nowrap' }} // Prevents wrapping of tabs
        >
            {openTabs &&
                openTabs.map((page, index) => {
                    const position = index === 0 ? 'first' : index === openTabs.length - 1 ? 'last' : 'middle';
                    return (
                        <div key={page} onClick={() => onTabClick(page.name)}>
                            <Tab page={page} selected={page.name === selectedTab.name} position={position} onTabClose={onTabClose} selectedTab={selectedTab} openTabs={openTabs} pages={pages} />
                        </div>
                    );
                })
            }

            {/*element to fill remaining space with a bottom border. cannot believe this was the best approach. */}
            <div className="flex-grow border-b-[1px] border-borderColor"></div>
        </div>
    );
};

export default TabController;
