import express from 'express';
import cors from 'cors';
import db from './config/db.config.js';
import Router from './routes/index.js';

const app = express();
app.use(express.json());
app.use(cors());

try {
    await db.authenticate();
    console.log('Connection has been established successfully');
} catch (error) {
    console.error('Unable to connect to the database', error);
}


app.use(Router)

app.listen(5001, () =>  console.log('Running'))
