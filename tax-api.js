let request = require('request');

module.exports = {
  getTaxForOrder(order) {
    return new Promise((resolve, reject) => {
      request.post({
        url: 'https://some-tax-service.com/v1/tax-calcuation',
        json: order
      }, (error, response, body) => {
        resolve({ amount: body.data.attributes['amount-to-collect'] });
      });
    });
  }
};
