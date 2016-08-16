/**
 * Created by jackie on 16/8/16.
 */
var Request = require('../request');
var hashing = require('../hashing');

function _request(data, callback){
  check(data);

  var request = new Request;

  return request.post('/user/deploy', data, callback);
}

function check(data) {
  ['user_token', 'device_id', 'device_password'].forEach(function(item){
    if(!data[item]){
      throw new Error("Params invalid: no " + item + ' was given!');
    }
  });
}

module.exports = _request;
