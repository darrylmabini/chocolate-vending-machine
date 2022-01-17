import { Router } from 'express';
import { ProductController } from './product.controller';

const apiRouter = Router();

apiRouter.get('/products', ProductController.getProducts);
apiRouter.post('/product/:id', ProductController.updateProduct);

export default apiRouter;
