import path from 'path';
import { fileURLToPath } from 'url';
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

import dotenv from 'dotenv';

export const entorno = {
  MODE: process.argv[2],
};

if (process.argv[2] != 'DEV' && process.argv[2] != 'PROD') {
  process.exit();
}

dotenv.config({
  path: process.argv[2] === 'DEV' ? './.env.development' : './.env.production',
});

entorno.PORT = process.env.PORT;
entorno.MONGO_URL = process.env.MONGO_URL;