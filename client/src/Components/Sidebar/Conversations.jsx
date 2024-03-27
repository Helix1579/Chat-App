import React from 'react';
import Conversation from './Conversation';
import {getRandomEmoji} from '../../Utilities/emoji';
import useGetConversations from '../../Hooks/useGetConversations';

const Conversations = () => {
    
    const { Conversations, Loading } = useGetConversations();

    // console.log(Conversations);
    return (
        <div
            className='pr-1
                flex flex-col
                w-full
                overflow-auto'
        >
            {Conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation.id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === Conversations.length - 1}
                />
            ))}

            {Loading ? (
                <span
                    className='loading 
                    loading-spinner
                    mx-auto'
                />
            ) : null}
        </div>
    );
};

export default Conversations;
