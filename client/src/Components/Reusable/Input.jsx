import React from 'react';

const Input = ({ placeHolder, search = false, password = false }) => {
    return (
        <input
            type={password ? 'password' : 'text'}
            className={
                search
                    ? 'input input-bordered input-success input-sm w-full py-3 px-3 h-8 bg-inherit text-green-500 border-green-500'
                    : 'input input-bordered input-success input-sm w-full py-3 px-3 h-10 bg-inherit text-green-500 border-green-500'
            }
            placeholder={placeHolder}
        />
    );
};

export default Input;
