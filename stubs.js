let sinon = require('sinon');
let { expect } = require('chai');

let Auth = {
  attempt() {
    // implementation here
  }
};

class Unauthorized {}

function login(credentials) {
  return Auth.attempt(credentials).then((auth) => {
    return auth.user;
  }, () => {
    throw new Unauthorized();
  });
}

describe('the login function', () => {
  beforeEach(() => {
    this.sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    this.sandbox.restore();
  });
  it('should resolve with the user if authenticated', () => {
    let credentials = { email: 'test@gmail.com', password: 'abc' };
    let auth = {
      user: {
        email: 'test@gmail.com'
      }
    };
    this.sandbox.stub(Auth, 'attempt').returns(Promise.resolve(auth));
    return login(credentials).then((loggedInUser) => {
      expect(loggedInUser).to.equal(auth.user);
    });
  });

  it('should reject with Unauthorized if unauthenticated', () => {
    let credentials = { email: 'test@gmail.com', password: 'abc' };
    this.sandbox.stub(Auth, 'attempt').returns(Promise.reject());
    return login(credentials).catch((error) => {
      expect(error).to.be.an.instanceof(Unauthorized);
    });
  });
});
