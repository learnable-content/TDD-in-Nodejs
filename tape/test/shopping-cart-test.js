var test = require('tape');
var ShoppingCart = require('./../src/shopping-cart');

test('the subtotal', function(t) {
  var shoppingCart = new ShoppingCart();
  t.equal(shoppingCart.subtotal, 0, 'should be 0 when there are no items in the cart');
  t.end();
});

// test('an async test', function(t) {
//   t.plan(1);
//   setTimeout(function() {
//     t.equal(1, 1, 'should finish after 1 second');
//   }, 1000);
// });