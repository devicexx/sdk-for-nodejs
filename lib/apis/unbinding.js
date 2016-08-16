/**
 * Created by jackie on 16/8/16.
 */
var Request = require('../request');
var hashing = require('../hashing');

function _request(data, callback){
  check(data);

  var request = new Request;
  data.device_password = hashing.hash1to2(data.device_password, request.ts);

  return request.post('/user/unbinding', data, callback);
}

function check(data) {
  ['user_token', 'device_id', 'device_password'].forEach(function(item){
    if(!data[item]){
      throw new Error("Params invalid: no " + item + ' was given!');
    }
  });
}

module.exports = _request;
