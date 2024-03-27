import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './Pages/SignUp/SignUp';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import { Flip, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from './Context/AuthContext';

const App = () => {
    const { AuthUser } = useAuthContext();
    console.log('AuthUser : ' , { AuthUser } );
    return (
        <div
            className='p-3 
                h-screen
                flex
                items-center
                justify-center'
        >
            <Routes>
                <Route
                    path='/'
                    element={AuthUser ? <Home /> : <Navigate to={'/login'} />}
                />
                <Route
                    path='/login'
                    element={AuthUser ? <Navigate to='/' /> : <Login />}
                />
                <Route
                    path='/signup'
                    element={AuthUser ? <Navigate to='/' /> : <SignUp />}
                />
            </Routes>
            <ToastContainer autoClose={2000} transition={Flip} stacked />
        </div>
    );
};

export default App;
