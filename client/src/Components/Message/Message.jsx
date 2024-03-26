import React from 'react';
import { useAuthContext } from '../../Context/AuthContext';
import useConversation from '../../Zustand/useConversation';
import { Time } from '../../Utilities/time';

const Message = ({ message }) => {
    const { AuthUser } = useAuthContext();
    const { SelectedConversation } = useConversation();
    const Sender = message.senderId === AuthUser._id;
    const chatClass = Sender ? 'chat-end' : 'chat-start';
    const profilePic = Sender
        ? AuthUser.profilePic
        : SelectedConversation?.profilePic;

    const time = Time(message.createdAt);

    // console.log(SelectedConversation.createdAt);

    return (
        <div className={`chat ${chatClass}`}>
            <div
                className='chat-image
                    avatar'
            >
                <div
                    className='w-6 
                        rounded-full
                        mr-2'
                >
                    <img
                        className='bg-green-500'
                        alt='Tailwind CSS chat bubble component'
                        src={profilePic}
                    />
                </div>
            </div>
            <div
                className='chat-bubble 
                    text-black
                    text-sm
                    flex
                    min-h-7
                    min-w-7
                    items-center
                    justify-center
                    px-3 py-0
                    bg-green-500'
            >
                {message.message}
            </div>
            <div className='chat-footer opacity-50 text-xs'>{time}</div>
        </div>
    );
};

export default Message;
