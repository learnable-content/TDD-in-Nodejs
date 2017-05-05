// let assert = require('assert');
let { expect } = require('chai');
let ShoppingCart = require('./shopping-cart');

describe('The shopping cart', () => {
  describe('subtotal should', () => {
    it('be 0 if no items are passed in', () => {
      // arrange
      let shoppingCart = new ShoppingCart();
      // act
      let subtotal = shoppingCart.subtotal;
      // assert
      // assert.equal(subtotal, 0);
      expect(subtotal).to.equal(0);
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

      // assert.equal(shoppingCart.subtotal, 300);
      expect(shoppingCart.subtotal).to.equal(300);
    });
  });

  describe('add method should', () => {
    it('store the item in the shopping cart', () => {
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50
        }
      ]);

      shoppingCart.add({
        id: 2,
        quantity: 2,
        price: 30
      });

      expect(shoppingCart.items).to.be.an('array');
      expect(shoppingCart.items).to.deep.equal([
        {
          id: 1,
          quantity: 4,
          price: 50
        },
        {
          id: 2,
          quantity: 2,
          price: 30
        }
      ]);
    });

    it('return the item that was stored in the shopping cart', () => {
      let shoppingCart = new ShoppingCart([
        {
          id: 1,
          quantity: 4,
          price: 50
        }
      ]);

      let item = {
        id: 2,
        quantity: 2,
        price: 30
      };

      let addedItem = shoppingCart.add(item);
      expect(addedItem).to.equal(item);
    });
  });
});
