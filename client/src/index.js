import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter } from 'react-router-dom';
import { SocketProvider } from './Context/SocketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <SocketProvider>
                    <App />
                </SocketProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
