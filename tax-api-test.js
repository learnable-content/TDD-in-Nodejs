let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let nock = require('nock');
let taxAPI = require('./tax-api');

chai.use(chaiAsPromised);
let { expect } = chai;

describe('taxAPI', () => {
  describe('getTaxForOrder()', () => {
    it('should calculate sales tax for an order', () => {
      nock('https://some-tax-service.com')
        .post('/v1/tax-calcuation')
        .reply(200, {
          data: {
            id: 'sdfdsf',
            type: 'tax-calcuations',
            attributes: {
              'amount-to-collect': 0.9
            }
          }
        });
      let taxForOrder = taxAPI.getTaxForOrder({ amount: 10, state: 'CA' });
      return expect(taxForOrder).to.eventually.deep.equal({ amount: 0.9 });
      // return taxAPI.getTaxForOrder({ amount: 10, state: 'CA' }).then((tax) => {
      //   expect(tax).to.deep.equal({ amount: 0.9 });
      // });
    });
  });
});
