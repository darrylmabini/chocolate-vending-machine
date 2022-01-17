import { NextFunction } from 'express';
import { FixMeAny } from 'types';
import { HttpException } from 'infrastructure/http/exception/http.exception';

export const sendError = (next: NextFunction, error: FixMeAny) => {
  next(new HttpException(error?.status, error?.message));
};
