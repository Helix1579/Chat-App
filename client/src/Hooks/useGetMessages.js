import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import useConversation from '../Zustand/useConversation';

const useGetMessages = () => {
    const [Loading, setLoading] = useState(false);
    const { Messages, setMessages, SelectedConversation } = useConversation();
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);

            axios
                .get(
                    `http://localhost:8080/api/messages/${SelectedConversation._id}`,
                    {
                        withCredentials: true,
                    }
                )
                .then((res) => {
                    setMessages(res.data);
                    setLoading(false);
                })

                .catch((error) => {
                    console.log(error.message);
                    toast.error(error.message);
                });
        };

        if (SelectedConversation?._id) {
            getMessages();
        }

    }, [SelectedConversation?._id, setMessages]);

    return { Messages, Loading };
};

export default useGetMessages;
