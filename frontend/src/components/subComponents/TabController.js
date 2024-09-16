import React from 'react';
import Tab from './Tab';

const TabController = ({ tabNames, selectedTab, onTabClick }) => {
    return (
        <div
            className="h-full w-full flex flex-row overflow-x-auto 
            border-borderColor bg-tabBackground"
            style={{ whiteSpace: 'nowrap' }} // Prevents wrapping of tabs
        >
            {tabNames &&
                tabNames.map((name, index) => {
                    const position = index === 0 ? 'first' : index === tabNames.length - 1 ? 'last' : 'middle';
                    return (
                        <div key={name} onClick={() => onTabClick(name)}>
                            <Tab name={name} selected={name === selectedTab} position={position} />
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
