const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();
let ShoppingCart = require('./../src/shopping-cart');

lab.experiment('The shopping cart', () => {
  lab.experiment('subtotal should', () => {
    lab.test('be 0 if no items are passed in', (done) => {
      let shoppingCart = new ShoppingCart();
      Code.expect(shoppingCart.subtotal).to.equal(0);
      done();
    });

    lab.test('be the sume of the price * quantity for all items', (done) => {
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

      Code.expect(shoppingCart.subtotal).to.equal(300);
      done();
    });
  });

  lab.experiment('add method should', () => {
    lab.test('store the item in the shopping cart', (done) => {
      let shoppingCart = new ShoppingCart();
      shoppingCart.add({
        id: 2,
        quantity: 2,
        price: 30
      });
      Code.expect(shoppingCart.items).to.equal([
        {
          id: 2,
          quantity: 2,
          price: 30
        }
      ]);
      done();
    });
    lab.test('return the item that was stored in the shopping cart', (done) => {
      let shoppingCart = new ShoppingCart();
      let item = {
        id: 2,
        quantity: 2,
        price: 30
      };
      let addedItem = shoppingCart.add(item);
      Code.expect(addedItem).to.shallow.equal(item);
      done();
    });
  });
});