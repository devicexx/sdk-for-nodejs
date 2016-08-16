/**
 * Created by jackie on 16/8/16.
 */

var dxx = require('../lib');

dxx.init({
  baseUrl: 'http://api.vcd.io:4567',
  prefix: '/v1',
  access_key: '8e0bb23839955bde1346b6e9395347ff',
  access_secret: 'cafdeb099d45eee7e2faddea091fd609'
});

module.exports = dxx;
