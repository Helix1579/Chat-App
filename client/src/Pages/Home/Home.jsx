import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import '../style.css';
import MessageContainer from '../../Components/Message/MessageContainer';

const Home = () => {
    return (
        <div
            className='data-container
            flex h-full
            rounded-lg'
        >
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default Home;
