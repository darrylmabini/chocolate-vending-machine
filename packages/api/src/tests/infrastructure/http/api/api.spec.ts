import supertest from 'supertest';
import server from 'server';

describe('Integration tests', () => {
  describe('GET /api/products', () => {
    it('should respond 200', async () => {
      await supertest(server).get('/api/products').expect('Content-Type', /json/).expect(200);
    });
  });

  describe('POST /api/product/:id', () => {
    it('should respond 200', async () => {
      const response = await supertest(server)
        .post('/api/product/1')
        .send({ id: 1, name: 'test', quantity: 0 })
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body.id).toEqual(1);
      expect(response.body.name).toEqual('test');
      expect(response.body.quantity).toEqual(0);
    });

    it('should respond 404', async () => {
      await supertest(server)
        .post('/api/product/10')
        .send({ id: 1, name: 'test', quantity: 0 })
        .expect('Content-Type', /json/)
        .expect(404);
    });
  });
});
