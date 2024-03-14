import React from 'react';

const Input = ({ placeHolder, password = false }) => {
    return (
        <input
            type={password ? 'password' : 'text'}
            className='input 
                input-bordered
                input-md
                w-full p-1 pl-3
                h-10 bg-inherit

                text-green-500'
            placeholder={placeHolder}
        />
    );
};

export default Input;
