import { Request, Response, NextFunction } from 'express';
import { sendError } from 'application/handler/sendError';
import { sendResponse } from 'application/handler/sendResponse';
import { inMemoryProductRepository } from 'infrastructure/persistence/in-memory-product.repository';

export class ProductController {
  public static getProducts = async (request: Request, response: Response, next: NextFunction) => {
    try {
      sendResponse(response, await inMemoryProductRepository.findAll());
    } catch (error) {
      sendError(next, error);
    }
  };

  public static updateProduct = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const id = +request.params?.id;
      const product = request.body;

      sendResponse(response, await inMemoryProductRepository.update(id, product));
    } catch (error) {
      sendError(next, error);
    }
  };
}
