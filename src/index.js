import app from './app.js';
import { connectMongo } from './utils/db.js';
import { entorno } from './utils/enviroment.js';

connectMongo();

app.listen(entorno.PORT);

console.log(`server on port ${entorno.PORT}`);
