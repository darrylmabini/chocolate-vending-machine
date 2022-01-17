import { RecordNotFoundException } from 'domain/exception/record-not-found.exception';
import { inMemoryProductRepository } from 'infrastructure/persistence/in-memory-product.repository';

describe('infrastructure/persistence', () => {
  it('should return list of products', async () => {
    const products = await inMemoryProductRepository.findAll();
    expect(products).toEqual(expect.arrayContaining([expect.objectContaining({ id: 1 })]));
  });

  it('should update product', async () => {
    const product = await inMemoryProductRepository.update(1, { id: 1, name: 'test', quantity: 0 });
    expect(product.id).toEqual(1);
    expect(product.name).toEqual('test');
    expect(product.quantity).toEqual(0);
  });

  it('should throw RecordNotFoundException', async () => {
    try {
      await inMemoryProductRepository.update(100, { id: 100, name: 'test', quantity: 0 });
    } catch (error) {
      expect(error instanceof RecordNotFoundException).toBeTruthy();
    }
  });
});
