module.exports = class ShoppingCart {
  constructor(items = []) {
    this._items = items;
  }
  get subtotal() {
    return this._items.reduce((accumulatedSubtotal, item) => {
      return accumulatedSubtotal + (item.quantity * item.price);
    }, 0);
  }
  add(item) {
    this._items.push(item);
    return item;
  }
  get items() {
    return this._items;
  }
}