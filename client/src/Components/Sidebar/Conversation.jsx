import React from 'react';
import useConversation from '../../Zustand/useConversation';
import { useSocketContext } from '../../Context/SocketContext';

const Conversation = ({ conversation, lastIdx, emoji }) => {

    const { SelectedConversation, setSelectedConversation } = useConversation();

    const isSelected = SelectedConversation?._id === conversation._id;
    const { OnlineUsers } = useSocketContext();
    const isOnline = OnlineUsers.includes(conversation._id);

    return (
        <div
            className={`flex gap-1
                items-center p-1
                hover:bg-green-500
                hover:text-black
                rounded w-full
                cursor-pointer
                ${isSelected ? 'bg-green-500 text-black' : ''}`}
            onClick={() => setSelectedConversation(conversation)}
        >
            <div className={`avatar ${isOnline ? 'online' : ''}`}>
                <div className='w-9 rounded-full'>
                    <img src={conversation.profilePic} alt='User Avatar' />
                </div>
            </div>
            <div
                className='flex 
                    flex-col
                    flex-1'
            >
                <div
                    className='flex gap-3 
                        justify-between'
                >
                    <p className='text-sm'>{conversation.name}</p>
                    <span className='text-md'>{emoji}</span>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </div>
    );
};

export default Conversation;
