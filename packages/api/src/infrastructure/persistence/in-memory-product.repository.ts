import { Product } from 'domain/product';
import { ProductRepository } from 'domain/product/product.repository';
import { RecordNotFoundException } from 'domain/exception/record-not-found.exception';

class InMemoryProductRepository implements ProductRepository {
  private products: Product[] = [];

  constructor(products?: Product[]) {
    this.products = products || [
      new Product(1, 'Caramel', 5, '/images/caramel.png'),
      new Product(2, 'Hazelnut', 3, '/images/hazelnut.png'),
      new Product(3, 'Organic Raw', 1, '/images/organic.png'),
    ];
  }

  async findAll() {
    return this.products;
  }

  async update(id: number, update: Product) {
    if (!this.products.find((product) => product.id === id)) {
      throw new RecordNotFoundException();
    }

    this.products = this.products.map((product) => {
      return product.id == id ? update : product;
    });

    return update;
  }
}

export const inMemoryProductRepository = new InMemoryProductRepository();
