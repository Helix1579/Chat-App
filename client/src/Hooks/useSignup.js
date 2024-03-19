import { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuthContext } from '../Context/AuthContext';

function handleInputErrors({
    name,
    username,
    password,
    confirmPassword,
    gender,
}) {
    if (!name || !username || !password || !confirmPassword || !gender) {
        toast.error('Please fill in all fields', {
            theme: 'dark'
        });
        return false;
    }

    if (password !== confirmPassword) {
        toast.error('Passwords do not match', {
            theme: 'dark'
        });
        return false;
    }

    if (password.length < 6) {
        toast.error('Password must be at least 6 characters', {
            theme: 'dark',
        });
        return false;
    }

    return true;
}

const useSignup = () => {
    const [Loading, setLoading] = useState(false);
    const { setUser } = useAuthContext();

    const signup = async (FormData) => {
        console.log(FormData);
        const success = handleInputErrors(FormData);
        if (!success) return;

        setLoading(true);

        await axios
            .post('http://localhost:8080/api/auth/signup', FormData, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
                localStorage.setItem('user', JSON.stringify(res.data));
                setUser(res.data);
                toast.success('Account created successfully', {
                    theme: 'dark',
                });
            })
            .catch((error) => {
                console.log(error.response.data);
                toast.error('An error occurred', {
                    theme: 'dark',
                });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return { Loading, signup };
};

export default useSignup;
