/**
 * Created by jackie on 16/8/16.
 */
var Request = require('../request');
var hashing = require('../hashing');

function _request(data, callback){
  check(data);

  var request = new Request;
  data.password = hashing.hash2(data.password, request.ts);
  console.log('password2:', data.password);

  return request.post('/user/token', data, callback);
}

function check(data) {
  ['username', 'password'].forEach(function(item){
    if(!data[item]){
      throw new Error("Params invalid: no " + item + ' was given!');
    }
  });
}

module.exports = _request;
