import { TOKEN_SECRET } from '../utils/config.js';
import jwt from 'jsonwebtoken';

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      status: 'Success',
      message: 'No token, authorization denided',
      data: {},
    });
  }

  jwt.verify(token, TOKEN_SECRET, (error, decoded) => {
    if (error) {
      return res.status(403).json({
        status: 'Error',
        message: 'Invalid token',
        data: error,
      });
    } else {
      req.user = decoded;
      next();
    }
  });
};
