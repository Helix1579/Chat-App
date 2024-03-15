import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';

const MessageContainer = () => {
    return (
        <div
            className='flex 
            flex-col
            w-full
            pl-2'
        >
            {/* Header */}
            <div
                className='px-2
                py-1 mb-2 w-full
                bg-green-600'
            >
                <span className='label-text text-black'>To : </span>
                <span className='label-text text-black'>John Doe</span>
            </div>
            {/* Messages */}
            <div className='flex flex-col overflow-auto'>
                <Messages />
                <MessageInput />
            </div>
        </div>
    );
};

export default MessageContainer;
