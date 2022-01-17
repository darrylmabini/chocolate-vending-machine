import { RecordNotFoundException } from 'domain/exception/record-not-found.exception';

describe('domain/exception', () => {
  it('should properly instantiate record not found exception', () => {
    const exception = new RecordNotFoundException();
    expect(exception.status).toEqual(404);
  });
});
