import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE || '7d' });
};

export const register = async (req, res, next) => {
    try {

    }catch{
        next(error);
    }
};

export const login = async (req, res, next) => {
};

export const getProfile = async (req, res, next) => {
};

export const updateProfile = async (req, res, next) => {
};

export const changePassword = async (req, res, next) => {
};

