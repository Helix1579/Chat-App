import React from 'react';
import Conversation from './Conversation';

const Conversations = () => {
    return (
        <div
            className='pr-1
                flex flex-col
                w-full
                overflow-auto'
        >
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
        </div>
    );
};

export default Conversations;
