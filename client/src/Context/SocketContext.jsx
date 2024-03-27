import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
    const [Socket, setSocket] = useState(null);
    const [OnlineUsers, setOnlineUsers] = useState([]);
    const { AuthUser } = useAuthContext();

    useEffect(() => {
        if (AuthUser) {
            const socket = io('http://localhost:8080', {
                query: {
                    userId: AuthUser._id,
                },
            });

            setSocket(socket);

            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });

            return () => {
                socket.close();
            };
        } else {
            if (Socket) {
                Socket.close();
                setSocket(null);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AuthUser]);

    return (
        <SocketContext.Provider value={{ Socket, OnlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};
