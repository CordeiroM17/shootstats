import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { entorno } from './utils/enviroment.js';

import { authRouter } from './routes/auth.routes.js';
import { shooterRouter } from './routes/shooter.routes.js';
import { practiceRouter } from './routes/practice.routes.js';
import passport from 'passport';
import { iniPassport } from './utils/passport.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: entorno.CLIENT_URL,
    credentials: true,
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: 'super secret key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: entorno.MONGO_URL,
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 100000,
    }),
  })
);

iniPassport();
app.use(passport.initialize());

app.use('/api/auth', authRouter);
app.use('/api/shooters', shooterRouter);
app.use('/api/practices', practiceRouter);

export default app;
