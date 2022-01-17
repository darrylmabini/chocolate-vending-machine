export class RecordNotFoundException extends Error {
  status: number;
  message: string;

  constructor(status = 404, message = 'Record not found.') {
    super(message);

    this.status = status;
    this.message = message;
  }
}
