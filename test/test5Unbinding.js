/**
 * Created by jackie on 16/8/16.
 */
var assert = require('assert');
var dxx = require('./dxx');

describe('sdk-for-devicexx', function () {
  it('user/unbinding', function (done) {
    var data = {
      user_token: '95bff09f-a581-46e3-930c-e9b0533ddc6e',
      device_id: 'BuZR4ohMzRqUokEKYwMrqZ',
      device_password: '92a42ad82ecdd61da81cfbdb7a89be2b'
    };
    // data.protocol = 'mqtts';

    dxx.unbinding(data, function (error, response, body) {
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
