import { useEffect, useRef } from 'react';
import useGetMessages from '../../Hooks/useGetMessages';
import MessageSkeleton from '../Skeleton/MessageSkeleton';
import Message from './Message';

const Messages = () => {
    const { Messages, Loading } = useGetMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }, [Messages]);

    return (
        <>
            <div className='flex-1 overflow-auto'>
                {!Loading &&
                    Messages.length > 0 &&
                    Messages.map((msg) => (
                        <div key={msg._id} ref={lastMessageRef}>
                            <Message message={msg} />
                        </div>
                    ))}
                {Loading &&
                    [...Array(3)].map((_, idx) => (
                        <MessageSkeleton key={idx} />
                    ))}
                {!Loading && Messages.length === 0 && (
                    <p className='text-center'>
                        Send a message to start the conversation
                    </p>
                )}
            </div>
        </>
    );
};

export default Messages;
