const Lab = require('lab');
const Code = require('code');
const lab = exports.lab = Lab.script();

lab.experiment('math', () => {
  lab.test('returns true when 1 + 1 = 2', (done) => {
    Code.expect(1 + 1).to.equal(2);
    done();
  });
  // lab.test('another test');
});