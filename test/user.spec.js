var request = require('superagent');
var expect = require('expect.js');

describe('GET /api/users', function() {
  it('should get all users', function(done) {
    request
      .get('http://localhost:3000/api/users')
      .set('Accept', 'application/json')
      .end(function(err, res) {
        expect(res).to.exist;
        expect(typeof res.body).to.equal('object');
        expect(Array.isArray(res.body)).to.equal(true);
        expect(res.status).to.equal(200)
        done();
      })
  })
})
