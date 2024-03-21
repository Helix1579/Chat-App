import { useState } from 'react';
import { useAuthContext } from '../Context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const useLogin = () => {
    const [Loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        const data = {
            username,
            password,
        };
        console.log(data);
        // const success = handleInputErrors(FormData);
        // if (!success) return;

        setLoading(true);

        await axios
            .post('http://localhost:8080/api/auth/login', data, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
                localStorage.setItem('user', JSON.stringify(res.data));
                setAuthUser(res.data);
                toast.success('Logged in successfully', {
                    theme: 'dark',
                });
            })
            // .catch((error) => {
            //     console.log(error.response.data);
            //     setLoading(false);
            //     toast.error('Invalid Username or Password', {
            //         theme: 'dark',
            //     });
            // });
        // console.log(
        //     'UseLogin :-\n \tUsername : ' + username,
        //     '\n\tPassword : ' + password
        // );
        // setLoading(true);

        // await axios
        //     .post(
        //         'http://localhost:8080/api/auth/login',
        //         { username, password },
        //         {
        //             withCredentials: true,
        //         }
        //     )
        //     .then((res) => {
        //         localStorage.setItem('user', JSON.stringify(res.data));
        //         // console.log('UserLogin : ' + res.data);
        //         setUser(res.data);
        //         toast.success('Logged in successfully', {
        //             theme: 'dark',
        //         });
        //     })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                toast.error('An error occurred', {
                    theme: 'dark',
                });
            });
    };

    return { Loading, login };
};

export default useLogin;
