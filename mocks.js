let { expect } = require('chai');
let sinon = require('sinon');
let OrderSummary = require('./order-summary');
let taxAPI = require('./tax-api');

describe('The OrderSummary', () => {
  describe('calculate method', () => {
    it('should call tax.getTaxForOrder', () => {
      // Assert
      let mock = sinon.mock(taxAPI);
      mock.expects('getTaxForOrder').twice().withArgs({
        amount: 10,
        state: 'CA',
        country: 'US'
      }).returns(Promise.resolve({ amount: 20 }));

      // Arrange
      let shoppingCart = { subtotal: 10 };
      let customerAddress = { state: 'CA', country: 'US' };
      let orderSummary = new OrderSummary(shoppingCart, customerAddress);

      // Act
      return orderSummary.calculate().then((order) => {
        mock.verify();
        mock.restore();
      });
    });
  });
});
