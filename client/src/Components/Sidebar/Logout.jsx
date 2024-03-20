import React from 'react';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../Hooks/useLogout';

const Logout = () => {
    const { Loading, logout } = useLogout();

    return (
        <div
            className='mt-auto
                pt-2
                cursor-pointer
                text-green-500'
        >
            {!Loading ? (
                <BiLogOut size='20px' onClick={logout} />
            ) : (
                <span className='loading loading-spinner'></span>
            )}
        </div>
    );
};

export default Logout;
