import { Product } from 'domain/product';

export interface ProductRepository {
  findAll: () => Promise<Product[]>;
  update: (id: number, product: Product) => Promise<Product>;
}
