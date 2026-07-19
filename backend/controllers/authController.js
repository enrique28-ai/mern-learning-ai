import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || '7d' });
};

export const register = async (req, res, next) => {
    try {
        const {username, email, password} = req.body;

        const userExists = await User.findOne({$or: [{email}] });

        if (userExists) {
            return res.status(400).json({ success: false, 
                error: userExists.email === email 
                ? 'Email already exists' 
                : 'Username already exists',
            statusCode: 400 });
        }

        const user = await User.create({ username, email, password });

        const token = generateToken(user._id);
        res.status(201).json({ success: true,
            data: {
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    profileImage: user.profileImage,
                    createdAt: user.createdAt,
                },
                token,
            },
            message: 'User registered successfully',
        });
    }catch{
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {

    }catch{
        next(error);
    }
};

export const getProfile = async (req, res, next) => {
    try {

    }catch{
        next(error);
    }
};

export const updateProfile = async (req, res, next) => {
    try {

    }catch{
        next(error);
    }
};

export const changePassword = async (req, res, next) => {
    try {

    }catch{
        next(error);
    }
};

