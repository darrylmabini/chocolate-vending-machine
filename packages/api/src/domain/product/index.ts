export class Product {
  id: number;
  name: string;
  quantity: number;
  image: string;

  constructor(id: number, name: string, quantity: number, image: string) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.image = image;
  }
}
