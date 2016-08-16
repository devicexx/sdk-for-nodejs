/**
 * Created by jackie on 16/8/16.
 */
var assert = require('assert');
var dxx = require('./dxx');

describe('sdk-for-devicexx', function () {
  it('user/bindingList', function (done) {
    var data = {
      user_token: '95bff09f-a581-46e3-930c-e9b0533ddc6e'
    };

    dxx.bindingList(data, function (error, response, body) {
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
