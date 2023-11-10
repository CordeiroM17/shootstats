import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.middleware.js';
import { validatorSchema } from '../middlewares/validator.middleware.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';

export const authRouter = Router();

authRouter.post('/login', validatorSchema(loginSchema), authController.login);

authRouter.post('/register', validatorSchema(registerSchema), authController.register);

authRouter.post('/logout', authController.logout);

authRouter.get('/profile', authRequired, authController.profile);

authRouter.get('/verifyToken', authController.verifyToken);
