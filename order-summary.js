let taxAPI = require('./tax-api');

module.exports = class OrderSummary {
  constructor(shoppingCart, customerAddress) {
    this.shoppingCart = shoppingCart;
    this.customerAddress = customerAddress;
  }
  calculate() {
    let subtotal = this.shoppingCart.subtotal;
    let taxData = Object.assign({ amount: subtotal }, this.customerAddress);
    return taxAPI.getTaxForOrder(taxData).then((tax) => {
      let taxAmount = tax.amount;
      let total = subtotal + taxAmount;
      return { subtotal, tax: taxAmount, total };
    });
  }
}
