import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import Logout from './Logout';

const Sidebar = () => {
    return (
        <div
            className='flex pr-2
                flex-col
                min-w-44
                border-r
                border-green-500'
        >
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <Logout />
        </div>
    );
};

export default Sidebar;
