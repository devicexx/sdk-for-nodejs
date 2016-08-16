var assert = require('assert');
var dxx = require('./dxx');

describe('sdk-for-devicexx', function () {
  it('user/register', function (done) {
    var data = {
      username: 'test123',
      password: '123456'
    };

    dxx.register(data, function (error, response, body) {
      if(error) done(error)
      else {
        if(body.success) {
          done();
        }else{
          done(body.message);
        }
        console.log(body);
      }
    });
  });
});
