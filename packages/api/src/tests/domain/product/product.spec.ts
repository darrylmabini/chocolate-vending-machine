import { Product } from 'domain/product';

describe('domain/product', () => {
  it('should properly instantiate product', () => {
    const product = new Product(1, 'test', 99, 3.1, '/images/test.png');
    expect(product.id).toEqual(1);
    expect(product.name).toEqual('test');
    expect(product.quantity).toEqual(99);
    expect(product.price).toEqual(3.1);
    expect(product.image).toEqual('/images/test.png');
  });
});
