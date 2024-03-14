import React from 'react';

const Input = ({ placeHolder, password = false }) => {
    return (
        <input
            type={password ? 'password' : 'text'}
            className='input 
                input-bordered
                input-success
                input-md
                w-full py-3 px-3
                h-10 bg-inherit
                text-green-500
                border-green-500'
            placeholder={placeHolder}
        />
    );
};

export default Input;
