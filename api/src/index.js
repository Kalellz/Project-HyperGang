import 'dotenv/config';
import { con } from './repo/connection.js'
import userController from './controller/userController.js'

import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json())

server.use(userController)
server.listen(process.env.PORT,
    () => console.log(`API online na porta ${process.env.PORT}`));