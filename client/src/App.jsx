import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Flip, ToastContainer } from 'react-toastify';
import './index.css';

const App = () => {
    return (
        <div
            className='p-3
        h-screen
        flex
        items-center
        justify-center'
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer autoClose={1500} transition={Flip} />;
        </div>
    );
};

export default App;
