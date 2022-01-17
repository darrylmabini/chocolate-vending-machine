import { Response } from 'express';

export const sendResponse = <T>(response: Response, body: T) => {
  try {
    response.status(200).json(body);
  } catch (error) {
    throw error;
  }
};
