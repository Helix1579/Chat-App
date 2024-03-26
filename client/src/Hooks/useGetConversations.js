import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetConversations = () => {
    const [Loading, setLoading] = useState(false);
    const [Conversations, setConversations] = useState([]);
    
    // console.log('Conversations Hook : \n', Conversations);
    
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            
            axios
            .get('http://localhost:8080/api/user', {
                withCredentials: true,
            })
            .then((res) => {
                setConversations(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err.response);
                setLoading(false);
            });
        };
        getConversations();
    }, [setConversations]);

    return { Loading, Conversations, setConversations };
};

export default useGetConversations;
