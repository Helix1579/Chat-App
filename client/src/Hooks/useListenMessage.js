import { useEffect } from 'react';
import { useSocketContext } from '../Context/SocketContext';
import useConversation from '../Zustand/useConversation';

const useListenMessage = () => {
    const { Socket } = useSocketContext();
    const { Messages, setMessages } = useConversation();

    useEffect(() => {
        Socket?.on('newMessage', (newMessage) => {
            setMessages([...Messages, newMessage]);
        });

        return () => Socket?.off('newMessage');
    }, [Socket, Messages, setMessages]);
};

export default useListenMessage;
