import React from 'react';

const Button = ({
    id,
    displayText,
    block = false,
    disabled,
}) => {
    return (
        <button
            id={id}
            className='btn p-0
                btn-outline
                btn-block
                text-green-500
                btn-sm h-full
                hover:bg-green-500
                hover:text-black'
            disabled={disabled}
            style={{
                width: block ? '100%' : '32px',
            }}
        >
            {displayText}
        </button>
    );
};

export default Button;
