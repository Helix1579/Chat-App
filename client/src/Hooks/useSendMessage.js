import { useState } from 'react';
import useConversation from '../Zustand/useConversation';
import axios from 'axios';
import { toast } from 'react-toastify';

const useSendMessage = () => {
    const [Loading, setLoading] = useState(false);
    const { Messages, setMessages, SelectedConversation } = useConversation();

    const SendMessage = async (message) => {
        setLoading(true);
        // console.log('Hook : ', message);
        axios
            .post(
                `http://localhost:8080/api/messages/send/${SelectedConversation._id}`,
                { message },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                setMessages([...Messages, res.data]);
                setLoading(false);
                // console.log(Messages);
            })
            .catch((err) => {
                console.log(err.message);
                toast.error('Failed to send message', { theme: 'dark' });
                setLoading(false);
            });
    };

    return { SendMessage, Loading };
};

export default useSendMessage;
