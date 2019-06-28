export default class Item {
  name;
  img;
  purchaseDate;
  originalPrice;
  feature;
  currentState;
  price;

  constructor(name, img, purchaseDate, price, originalPrice, feature, currentState, sold) {
    this.name = name;
    this.img = img;
    this.purchaseDate = purchaseDate;
    this.price = price;
    this.originalPrice = originalPrice;
    this.feature = feature;
    this.currentState = currentState;
    this.sold = sold
  }
}