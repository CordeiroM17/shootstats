import { authService } from '../services/auth.service.js';
import { createAccessToken } from '../utils/jwt.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../utils/config.js';

export const authController = {
  register: async function (req, res) {
    try {
      const { username, email, password } = req.body;
      const user = await authService.compareUserRegister(username, email, password);

      return res.status(201).json({
        status: 'Success',
        message: 'User created',
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Error',
        message: 'User not created',
        data: [error.message],
      });
    }
  },

  login: async function (req, res) {
    try {
      const { email, password } = req.body;
      const user = await authService.findUserToLogin(email, password);

      const token = await createAccessToken({ id: user._id });
      res.cookie('token', token);

      return res.status(200).json({
        status: 'Success',
        message: 'User logged',
        data: user,
      });
    } catch (error) {
      return res.status(404).json({
        status: 'Error',
        message: 'User not logged',
        data: [error.message],
      });
    }
  },

  logout: async function (req, res) {
    res.cookie('token', '', {
      expires: new Date(0),
    });
    return res.sendStatus(200);
  },

  profile: async function (req, res) {
    try {
      const userId = req.user.id;
      const user = await authService.findUserById(userId);
      return res.status(200).json({
        status: 'Success',
        message: 'This is your profile',
        data: user,
      });
    } catch (error) {
      return res.status(400).json({
        status: 'Error',
        message: 'User not found',
        data: [error.message],
      });
    }
  },

  verifyToken: async function (req, res) {
    const { token } = req.cookies;
    // Move trycatch to the service

    if (!token) {
      return res.status(401).json({
        status: 'Error',
        message: 'Unauthorized',
        data: {},
      });
    }

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
      if (error) {
        return res.status(401).json({
          status: 'Error',
          message: 'Unauthorized',
          data: {},
        });
      }

      const userFound = await authService.findUserById(user.id);

      if (!userFound) {
        return res.status(401).json({
          status: 'Error',
          message: 'Unauthorized',
          data: {},
        });
      }

      return res.status(200).json({
        status: 'Success',
        message: 'User data found',
        data: {
          id: userFound._id,
          username: userFound.username,
          email: userFound.email,
        },
      });
    });
  },
};
