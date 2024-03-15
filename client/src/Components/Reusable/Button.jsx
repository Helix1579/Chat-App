import React from 'react';

const Button = ({ name, block = false }) => {
    return (
        <button
            className='btn p-0
                    btn-outline
                    btn-block
                    text-green-500
                    btn-sm h-full
                    hover:bg-green-500
                    hover:text-black'
            style={{
                width: block ? '100%' : '32px',
            }}
        >
            {name}
        </button>
    );
};

export default Button;
