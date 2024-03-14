import express from 'express';
import { sendMessage } from '../Controller/messageController.js';
import privateRoutes from '../Middleware/privateRoutes.js';

const router = express.Router();

router.post('/send/:id', privateRoutes ,sendMessage)

export default router;