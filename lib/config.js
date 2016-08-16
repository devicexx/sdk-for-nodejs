/**
 * Created by jackie on 16/8/16.
 */
var _ = require('underscore')._;
var _config = {};

module.exports = {
  init: _init,
  get: _get,
  set: _set,
  reset: _reset
};

function _init(config) {
  _config = _.extend({}, _config, config);
}

function _get(key) {
  return _config[key] || null;
}

function _set(key, value) {
  _config[key] = value;
}

function _reset(){
  _config = {};
}
