import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { entorno } from './utils/enviroment.js';

import { authRouter } from './routes/auth.routes.js';
import { shooterRouter } from './routes/shooter.routes.js';
import { practiceRouter } from './routes/practice.routes.js';

const app = express();

app.use(
  cors({
    origin: entorno.CLIENT_URL,
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/shooter', shooterRouter);
app.use('/api/practice', practiceRouter)

export default app;
