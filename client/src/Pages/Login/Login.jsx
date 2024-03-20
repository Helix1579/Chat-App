import React from 'react';
import Input from '../../Components/Reusable/Input';
import '../style.css';
import Button from '../../Components/Reusable/Button';

const Login = () => {
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

                    <form>
                        <div className='gap-2 flex flex-col'>
                            <Input placeHolder='Username' />
                            <Input placeHolder='Password' password />
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
                        <Button block id='login' displayText='Login' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
