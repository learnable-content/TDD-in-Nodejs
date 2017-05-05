let { expect } = require('chai');

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done!');
    }, 100);
  });
}

describe('doSomethingAsync', () => {
  it('does something asynchronous', () => {
    doSomethingAsync().then((result) => {
      expect(result).to.equal('really done!');
    });
  });
});
