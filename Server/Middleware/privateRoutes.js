import jwt from 'jsonwebtoken';
import User from '../Models/userModel.js';

const privateRoutes = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No Token' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            return res
                .status(401)
                .json({ message: 'Unauthorized: Invalid Token' });
        }

        // console.log('Decoded: ', decoded);

        const user = await User.findById(decoded.userId);

        // console.log('User: ', user);
        req.user = user;
        // console.log('REQ User: ', req.user);
        next();
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: 'Error in Middleware' });
    }
};

export default privateRoutes;
