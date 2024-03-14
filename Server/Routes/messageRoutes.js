import express from 'express';
import { sendMessage, getMessage } from '../Controller/messageController.js';
import privateRoutes from '../Middleware/privateRoutes.js';

const router = express.Router();

router.post('/send/:id', privateRoutes, sendMessage);
router.get('/:id', privateRoutes, getMessage);

export default router;
