/**
 * Created by jackie on 16/8/16.
 */
var Request = require('../request');
var hashing = require('../hashing');

function _request(data, callback){
  check(data);

  var request = new Request;

  return request.post('/user/bindinglist', data, callback);
}

function check(data) {
  ['user_token'].forEach(function(item){
    if(!data[item]){
      throw new Error("Params invalid: no " + item + ' was given!');
    }
  });
}

module.exports = _request;
