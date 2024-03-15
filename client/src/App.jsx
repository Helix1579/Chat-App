import React from 'react';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

const App = () => {
    return (
        <div
            className='p-3
            h-screen
            flex
            items-center
            justify-center'
        >
            {/* <Login /> */}
            {/* <Signup /> */}
            <Home />
        </div>
    );
};

export default App;
