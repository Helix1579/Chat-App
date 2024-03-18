import React from 'react';
import { BiLogOut } from 'react-icons/bi';

const Logout = () => {
    return (
        <div className='mt-auto
            pt-2
            cursor-pointer
            hover:text-green-500'>
            <BiLogOut size='20px' />
        </div>
    );
};

export default Logout;
