import React, { useState } from 'react';
import Input from '../../Components/Reusable/Input';
import '../style.css';
import Button from '../../Components/Reusable/Button';
import useLogin from '../../Hooks/useLogin';

const Login = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const { Loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(Username, Password);
    };
    return (
        <div>
            <div className='container'>
                <div className='data-container'>
                    <h1
                        className='text-2xl
                        font-semibold
                        text-center mb-4
                        text-green-500'
                    >
                        Login
                        <span className='text-white'> Chat App</span>
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className='gap-2 flex flex-col'>
                            <Input
                                placeHolder='Username'
                                value={Username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <Input
                                placeHolder='Password'
                                password
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <a
                            href='/signup'
                            className='text-sm
                                hover:underline
                                hover:text-green-500
                                my-2 inline-block'
                        >
                            Don't have an account?
                        </a>
                        <Button
                            block
                            id='login'
                            displayText='Login'
                            // disabled={Loading}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
