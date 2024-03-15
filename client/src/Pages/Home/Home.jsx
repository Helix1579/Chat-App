import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import '../style.css';

const Home = () => {
    return (
        <div
            className='data-container
            flex h-full
            rounded-lg'
        >
            <Sidebar />
        </div>
    );
};

export default Home;
