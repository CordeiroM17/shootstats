import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.middleware.js';
import { validatorSchema } from '../middlewares/validator.middleware.js';
import { loginSchema, registerSchema } from '../schemas/auth.schema.js';
import passport from 'passport';

export const authRouter = Router();

authRouter.post('/login', validatorSchema(loginSchema), passport.authenticate("login", {failureRedirect: "/login"}), authController.login);

authRouter.post('/register', validatorSchema(registerSchema), passport.authenticate("register", {failureRedirect: "/register"}), authController.register);

authRouter.post('/logout', authController.logout);

authRouter.get('/profile', authRequired, authController.profile);

authRouter.get('/verifyToken', authController.verifyToken);
