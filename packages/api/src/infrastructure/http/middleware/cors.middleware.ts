import { NextFunction, Request, Response } from 'express';

export const corsMiddleware = (request: Request, response: Response, next: NextFunction) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Methods', 'POST, GET');
  response.header('Access-Control-Allow-Headers', 'Content-Type');

  next();
};
