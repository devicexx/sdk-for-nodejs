/**
 * Created by jackie on 16/8/16.
 */
var assert = require('assert');
var dxx = require('./dxx');

describe('sdk-for-devicexx', function () {
  it('user/token', function (done) {
    var data = {
      username: 'ypf3027',
      password: '123456'
    };

    dxx.token(data, function (error, response, body) {
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
