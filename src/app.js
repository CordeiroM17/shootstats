import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { authRouter } from './routes/auth.routes.js';
import { shooterRouter } from './routes/shooter.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/shooter', shooterRouter);

export default app;
