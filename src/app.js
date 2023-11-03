import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { entorno } from './utils/enviroment.js';
import { exec } from 'child_process';

import { authRouter } from './routes/auth.routes.js';
import { shooterRouter } from './routes/shooter.routes.js';
import path from 'path';

const app = express();

app.use(
  cors({
    origin: entorno.CLIENT_URL,
  })
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/shooter', shooterRouter);

// editar y pasar a su controlador cuando se hagan las practicas
app.get('/ejecutar_script', (req, res) => {
  const objeto = {
    nombre: 'John Doe',
    edad: 30,
    ocupacion: 'Desarrollador'
  };
  
  const objetoSerializado = JSON.stringify(objeto);

  console.log(typeof(objetoSerializado))

  exec(`py src/operations/index.py --objeto '${objetoSerializado}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al ejecutar el script: ${error}`);
      return;
    }
    console.log(`Salida del script: ${stdout}`);
    console.error(`Errores del script: ${stderr}`);
    res.send('Script de Python ejecutado con éxito');
  });
});

export default app;
