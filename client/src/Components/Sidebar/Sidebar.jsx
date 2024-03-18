import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import Logout from './Logout';

const Sidebar = () => {
    return (
        <div
            className='border-r
            border-green-500 pr-2
            flex flex-col'
        >
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <Logout />
        </div>
    );
};

export default Sidebar;
