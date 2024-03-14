import User from '../Models/userModel.js';

export const getUserSidebar = async (req, res) => {
    try {
        const loggedInUser = req.user._id;

        const filterUsers = await User.find({
            _id: { $ne: loggedInUser },
        }).select('-password');

        res.status(200).json(filterUsers);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Error in User Controller' });
    }
};
