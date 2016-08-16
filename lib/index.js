/**
 * Created by jackie on 16/8/16.
 */
var config = require('./config');

module.exports = {
  init: config.init,
  register: require('./apis/register'),
  token: require('./apis/token'),
  bindingList: require('./apis/bindingList'),
  deploy: require('./apis/deploy'),
  unbinding: require('./apis/unbinding')
};
