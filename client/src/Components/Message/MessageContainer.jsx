import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';

const NoChatSelected = () => {
    return (
        <div
            className='flex
            items-center
            justify-center
            w-full
            h-full'
        >
            <div
                className='px-4 text-center
                sm:text-lg
                md:text-xl
                text-green-200
                flex flex-col
                items-center
                gap-2'
            >
                <p>Welcome 🧑‍💻!</p>
                <p>Select a chat to start messaging</p>
                <TiMessages
                    className='text-2xl
                    md:text-4xl
                    text-center'
                />
            </div>
        </div>
    );
};

const MessageContainer = () => {
    const noChat = true;
    return (
        <div
            className='flex 
            flex-col
            w-full
            pl-2'
        >
            {noChat ? (
                <NoChatSelected />
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};

export default MessageContainer;
