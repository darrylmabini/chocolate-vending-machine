import express from 'express';
import bodyParser from 'body-parser';
import apiRouter from 'infrastructure/http/api';
import { corsMiddleware, errorMiddleware } from './infrastructure/http/middleware';

const server = express();

server.use(bodyParser.json());
server.use(corsMiddleware);
server.use('/api', apiRouter);
server.use(errorMiddleware);

export default server;
