import React, { useState } from 'react';
import '../style.css';
import Input from '../../Components/Reusable/Input';
import Button from '../../Components/Reusable/Button';
import CheckBox from '../../Components/Reusable/CheckBox';
import useSignup from '../../Hooks/useSignup';

const SignUp = () => {
    const [FormData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });
    const { Loading, signup } = useSignup();

    const handleFormChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(FormData);
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
                        Sign Up
                        <span className='text-white'> Chat App</span>
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className='gap-2 flex flex-col'>
                            <Input
                                id='name'
                                placeHolder='Fullname'
                                value={FormData.name}
                                onChange={handleFormChange}
                            />
                            <Input
                                id='username'
                                placeHolder='Username'
                                value={FormData.username}
                                onChange={handleFormChange}
                            />
                            <Input
                                id='password'
                                password
                                placeHolder='Password'
                                value={FormData.password}
                                onChange={handleFormChange}
                            />
                            <Input
                                id='confirmPassword'
                                password
                                placeHolder='Confirm Password'
                                value={FormData.confirmPassword}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='flex flex-row mt-2 gap-1'>
                            <CheckBox
                                id='gender'
                                value='male'
                                displayText='Male'
                                onChange={handleFormChange}
                                checked={FormData.gender === 'male'}
                            />
                            <CheckBox
                                id='gender'
                                value='female'
                                displayText='Female'
                                onChange={handleFormChange}
                                checked={FormData.gender === 'female'}
                            />
                        </div>

                        <a
                            href='/login'
                            className='text-xs
                                hover:underline
                                hover:text-green-500
                                my-2 inline-block'
                        >
                            Have an account?
                        </a>
                        <Button
                            block
                            id='signup'
                            displayText='Sign Up'
                            disabled={Loading}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
