/**
 * Created by jackie on 16/8/16.
 */
var crypto = require('crypto');
var config = require('./config');

function hash(value, algorithm){
  value = value.toString();
  var md5 = crypto.createHash(algorithm || 'md5');
  return md5.update(value, 'utf8').digest('hex');
}

function _hash1(value) {
  return hash(value);
}

function _hash0to2(value, timestamp) {
  var hash1 = _hash1(value);
  return _hash1to2(hash1);
}

function _hash1to2(hash1, timestamp) {
  var secret = config.get('access_secret');
  var content = [secret, hash1, timestamp].join('');
  return _hash1(content);
}

module.exports = {
  hash: _hash1,
  hash1: _hash1,
  hash2: _hash0to2,
  hash0to2: _hash0to2,
  hash1to2: _hash1to2
};
