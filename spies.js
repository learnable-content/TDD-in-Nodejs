let { expect } = require('chai');
let sinon = require('sinon');

class ShoppingCart {
  constructor(items = []) {
    this._items = items;
  }
  forEachItem(callback) {
    this._items.forEach((item) => {
      callback.call(item, item);
    });
  }
}

describe('The ShoppingCart', () => {
  describe('forEachItem method', () => {
    it('should invoke the callback for each item in the cart', () => {
      let item1 = { id: 1, quantity: 4, price: 50 };
      let item2 = { id: 2, quantity: 2, price: 30 };
      let shoppingCart = new ShoppingCart([ item1, item2 ]);

      let callback = sinon.spy();
      shoppingCart.forEachItem(callback);
      expect(callback.callCount).to.equal(2);
      expect(callback.args[0][0]).to.equal(item1);
      expect(callback.args[1][0]).to.equal(item2);
      expect(callback.thisValues[0]).to.equal(item1);
      expect(callback.thisValues[1]).to.equal(item2);
    });
  });
});
