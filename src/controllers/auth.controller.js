import { authService } from '../services/auth.service.js';
import { createAccessToken } from '../utils/jwt.js';

export const authController = {
  register: async function (req, res) {
    try {
      const { username, email, password } = req.body;
      const user = await authService.registerUser(username, email, password);

      const token = await createAccessToken({ id: user._id });
      res.cookie('token', token);

      return res.status(201).json({
        status: 'Success',
        message: 'User created',
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        status: 'Error',
        message: 'User not created',
        data: error,
      });
    }
  },

  login: async function (req, res) {
    try {
      const { email, password } = req.body;
      const user = await authService.loginUser(email, password);

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
        data: error,
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
        data: error,
      });
    }
  },
};
