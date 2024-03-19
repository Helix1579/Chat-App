import User from '../Models/userModel.js';
import bcrypt from 'bcryptjs';
import jwtToken from '../Utils/jwtToken.js';

export const Signup = async (req, res) => {
    try {
        const { name, username, password, confirmPassword, gender } = req.body;

        const userExists = await User.findOne({ username });
        const hashedPassword = await bcrypt.hash(password, 12);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Password not match' });
        }

        const newUser =
            password !== confirmPassword
                ? null
                : userExists
                ? null
                : new User({
                      name,
                      username,
                      password: hashedPassword,
                      gender,
                      profilePic:
                          gender === 'male' ? boyProfilePic : girlProfilePic,
                  });

        if (!newUser) {
            return res.status(400).json({ message: 'Invalid input' });
        } else {
            jwtToken(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.name,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const Login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const hashedPassword = await bcrypt.compare(
            password,
            user?.password || ''
        );
        if (!user || !hashedPassword) {
            return res
                .status(400)
                .json({ message: 'Invalid username or password' });
        }

        jwtToken(user._id, res);

        res.status(200).json({ message: 'User logged in successfully' });
    } catch (error) {
        console.log(error);
    }
};

export const Logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ message: 'User logged out successfully' });
    } catch (error) {
        console.log(error);
    }
};
