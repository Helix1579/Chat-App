import React from 'react';
import Signup from './Pages/Signup/Signup';
// import Login from './Pages/Login/Login';

const App = () => {
    return (
        <div
            className='p-4
            h-screen
            flex
            items-center
            justify-center'
        >
            {/* <Login /> */}
            <Signup />
        </div>
    );
};

export default App;
