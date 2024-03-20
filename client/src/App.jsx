import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider, useAuthContext } from './Context/AuthContext';

const App = () => {
    const { User } = useAuthContext();
    return (
        <div
            className='p-3
                h-screen
                flex
                items-center
                justify-center'
        >
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path='/'
                            element={User ? <Home /> : <Navigate to={'/login'} />}
                        />
                        <Route
                            path='/signup'
                            element={User ? <Navigate to='/' /> : <Signup />}
                        />
                        <Route
                            path='/login'
                            element={User ? <Navigate to='/' /> : <Login />}
                        />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
            <ToastContainer autoClose={2000} transition={Flip} stacked />;
        </div>
    );
};

export default App;
