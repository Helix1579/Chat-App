import { useState } from 'react';
import { useAuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const useLogout = () => {
    const [Loading, setLoading] = useState(false);
    const { setUser } = useAuthContext();

    const logout = async () => {
        console.log('Logout FormData : ' + FormData);
        setLoading(true);

        await axios
            .post('http://localhost:8080/api/auth/logout', {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
                localStorage.removeItem('user');
                setUser(null);
            })
            .catch((error) => {
                console.log(error.response);
                toast.error('An error occurred', {
                    theme: 'dark',
                });
                setLoading(false);
            });
    };
    return { Loading, logout };
};

export default useLogout;
