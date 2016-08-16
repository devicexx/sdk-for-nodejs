/**
 * Created by jackie on 16/8/16.
 */
var request = require('request');
var config = require('./config');
var hashing = require('./hashing');
var _ = require('underscore')._;

var options = null;
function Request(){
  this.ts = _time();

  if(!options){
    _init();
  }
}

function _init() {
  options = {};

  ['access_key', 'access_secret', 'baseUrl', 'prefix'].forEach(function(key){
    options[key] = config.get(key);
  });
}

Request.prototype.post = function (path, data, callback) {
  var url = _buildUrl(this, path, data);
  console.log(url, data);
  request.post({
    url: url,
    json: data
  }, callback);
};

function _signature(params, data) {
  var temp = _.extend({}, params, data);
  var keys = _.keys(temp);
  keys.sort();
  var content = '';
  _.each(keys, function(key){
    content += key + temp[key];
  });
  content += options.access_secret;
  return hashing.hash(content);
}

function _buildUrl(request, path, data){
  var p = {};
  p['ts'] = request.ts;
  p['access_key'] = options.access_key;
  p['signature'] = _signature(p, data);

  var params = kv(p);

  return [options['baseUrl'], options['prefix'], path, '?', params].join('');

  function kv(p){
    var params = [];
    for (var k in p){
      params.push([k, p[k]].join('='));
    }
    return params.join('&');
  }
}

function _time(ms){
  var time = new Date().getTime();
  if(!ms){
    time = Math.floor(time / 1000);
  }
  return time;
}

module.exports = Request;
