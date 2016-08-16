/**
 * Created by jackie on 16/8/16.
 */
var request = require('request');
var config = require('./config');
var hashing = require('./hashing');
var _ = require('underscore')._;

/**
 * 默认参数
 * @type {null|object}
 * @property access_key
 * @property access_secret
 * @property baseUrl
 * @property prefix
 */
var options = null;

/**
 * 请求构造函数
 * @constructor
 *
 * @property ts
 */
function Request() {
  this.ts = _time();

  if (!options) {
    _init();
  }
}

/**
 * 初始化参数
 * @private
 */
function _init() {
  options = {};

  ['access_key', 'access_secret', 'baseUrl', 'prefix'].forEach(function (key) {
    options[key] = config.get(key);
  });
}

/**
 * 发起post请求
 * @param path
 * @param data
 * @param callback
 */
Request.prototype.post = function (path, data, callback) {
  var url = _buildUrl(this, path, data);
  console.log(url, data);
  request.post({
    url: url,
    json: data
  }, callback);
};

/**
 * 签名
 * @param params
 * @param data
 * @returns {*}
 * @private
 */
function _signature (params, data) {
  var temp = _.extend({}, params, data);
  var keys = _.keys(temp);
  keys.sort();
  var content = '';
  _.each(keys, function (key) {
    content += key + temp[key];
  });
  content += options.access_secret;
  return hashing.hash(content);
}

/**
 * 构造请求地址
 * @param request
 * @param path
 * @param data
 * @returns {string}
 * @private
 */
function _buildUrl (request, path, data) {
  var p = {};
  p.ts = request.ts;
  p.access_key = options.access_key;
  p.signature = _signature(p, data);

  var params = kv(p);

  return [options.baseUrl, options.prefix, path, '?', params].join('');

  function kv(p) {
    var params = [];
    for (var k in p) {
      params.push([k, p[k]].join('='));
    }
    return params.join('&');
  }
}

/**
 * 生成时间戳
 * @param ms
 * @returns {number}
 * @private
 */
function _time (ms) {
  var time = new Date().getTime();
  if (!ms) {
    time = Math.floor(time / 1000);
  }
  return time;
}

module.exports = Request;
