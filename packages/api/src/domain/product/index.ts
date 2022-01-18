export class Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;

  constructor(id: number, name: string, quantity: number, price: number, image: string) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.image = image;
  }
}
