import React from 'react';

const CheckBox = ({ name }) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label
                    className='cursor-pointer 
                    label gap-2'
                >
                    <span className='lable-text text-sm'>{name}</span>
                    <input
                        type='checkbox'
                        className='checkbox
                            checkbox-sm
                            border-green-500
                            checked:border-green-500
                            [--chkbg:theme(colors.green.500)] [--chkfg:black]'
                    />
                </label>
            </div>
        </div>
    );
};

export default CheckBox;
