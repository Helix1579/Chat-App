import { Server } from 'socket.io';
import http from 'http';
import exppress from 'express';

const app = exppress();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);
    
    const userId = socket.handshake.query.userId;
    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;
        console.log('User Socket Map : \n\t' ,userSocketMap)
    }
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
    
    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
        delete userSocketMap[userId];
        console.log('User Socket Map : ', userSocketMap)
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
});

export { app, server, io };
