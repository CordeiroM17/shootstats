import app from './app.js';
import { connectMongo } from './utils/db.js';
import { entorno } from './utils/enviroment.js';

// Pre install Python and check another things
connectMongo();

app.listen(entorno.PORT);

console.log(`http://localhost:${entorno.PORT}`);
