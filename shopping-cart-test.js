let assert = require('assert');
let ShoppingCart = require('./shopping-cart');

describe('The shopping cart', () => {
  describe('subtotal should', () => {
    it('be 0 if no items are passed in', () => {
      // arrange
      let shoppingCart = new ShoppingCart();
      // act
      let subtotal = shoppingCart.subtotal;
      // assert
      assert.equal(subtotal, 0);
    });

    it('be the sum of the price * quantity for all items', () => {
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50
        },
        {
          id: 2,
          quantity: 2,
          price: 30
        },
        {
          id: 3,
          quantity: 1,
          price: 40
        }
      ]);

      assert.equal(shoppingCart.subtotal, 300);
    });
  });
});
