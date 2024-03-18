import React from 'react';
import '../style.css';
import Input from '../../Components/Reusable/Input';
import Button from '../../Components/Reusable/Button';
import CheckBox from '../../Components/Reusable/CheckBox';

const Signup = () => {
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
                        Sign Up
                        <span className='text-white'> Chat App</span>
                    </h1>
                    <form>
                        <div className='gap-2 flex flex-col'>
                            <Input placeHolder='Fullname' />
                            <Input placeHolder='Username' />
                            <Input placeHolder='Password' password />
                            <Input placeHolder='Confirm Password' password />
                        </div>
                        <div className='flex flex-row mt-2 gap-1'>
                            <CheckBox name='Male' />
                            <CheckBox name='Female' />
                        </div>

                        <a
                            href='/'
                            className='w-full
                            text-xs
                            hover:underline
                            hover:text-green-500
                            my-2 inline-block'
                        >
                            Have an account?
                        </a>
                        <Button block name='SignUp' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
