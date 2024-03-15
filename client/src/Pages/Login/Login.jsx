import React from 'react';
import Input from '../../Components/Reusable/Input';
import '../style.css';
import Button from '../../Components/Reusable/Button';

const Login = () => {
    return (
        <div
        // className='flex
        // flex-col
        // items-center
        // justify-center
        // min-w-96
        // mx-auto'
        >
            <div className='container'>
                <div
                    className='data-container'
                    // 'w-full
                    // rounded-xl
                    // p-5 shadow-md
                    // bg-gray-400
                    // bg-clip-padding
                    // backdrop-filter
                    // backdrop-blur-lg
                    // bg-opacity-0'
                >
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
                            href='/'
                            className=' w-full
                            text-sm
                            hover:underline
                            hover:text-green-500
                            my-2 inline-block'
                        >
                            Don't have an account?
                        </a>
                        <Button block name='Login' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;