var request = require('superagent');
var expect = require('expect.js');

describe('GET /api/users', function() {
  it('should get response OK', function(done) {
    request
      .get('http://localhost:3000/api/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res).to.exist;
        expect(res.status).to.equal(200);
        expect(res.ok).to.equal(true);
        done();
      });
  });
  it('should get all users in form of an array', function(done) {
    request
      .get('http://localhost:3000/api/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(typeof res.body).to.equal('object');
        expect(Array.isArray(res.body)).to.equal(true);
        done();
      });
  });
})
