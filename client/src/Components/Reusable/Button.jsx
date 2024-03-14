import React from 'react';

const Button = ({name}) => {
    return (
        <div>
            <button
                className='btn
                    btn-outline
                    btn-block
                    text-green-500
                    btn-sm mt-2
                    hover:bg-green-500
                    hover:text-white'
            >
                {name}
            </button>
        </div>
    );
};

export default Button;
