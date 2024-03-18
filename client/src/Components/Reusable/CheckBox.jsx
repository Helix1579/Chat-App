import React from 'react';

const CheckBox = ({
    id,
    displayText,
    onChange,
    checked,
    value,
}) => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label
                    className='cursor-pointer 
                    label gap-2'
                >
                    <span className='lable-text text-sm'>{displayText}</span>
                    <input
                        id={id}
                        value={value}
                        type='checkbox'
                        className='checkbox
                            checkbox-sm
                            border-green-500
                            checked:border-green-500
                            [--chkbg:theme(colors.green.500)] [--chkfg:black]'
                        onChange={onChange}
                        checked={checked}
                    />
                </label>
            </div>
        </div>
    );
};

export default CheckBox;
