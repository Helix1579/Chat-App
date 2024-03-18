import express from 'express';
import privateRoutes from '../Middleware/privateRoutes.js';
import { getUserSidebar } from '../Controller/userController.js';

const router = express.Router();

router.get('/', privateRoutes, getUserSidebar)

export default router;